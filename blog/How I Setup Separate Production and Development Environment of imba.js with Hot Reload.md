# How I Setup Separate Production and Development Environment of imba.js with Hot Reload

![img](https://cdn-images-1.medium.com/max/800/1*1yz2pBMIinMSU9ArRZsKeQ.png)

imba icon from imba, reload icon from<https://www.freeiconspng.com/img/16893>, webpack icon from webpack

### TLDR;

git clone <https://github.com/dipsywong98/imba-template> and follow the readme

### Why imba

My friend [Daniel Cheung](https://medium.com/@danvim) shared me a newsletter on [imba](https://github.com/imba/imba), saying that imba makes use of memorized dom which allows rendering speed is much faster than Vue and React which uses virtual dom: <https://medium.freecodecamp.org/the-virtual-dom-is-slow-meet-the-memoized-dom-bb19f546cc52>

As I see imba looks powerful and the syntax is quite clean, I’d like to try it out in my next project, which I am going to use imba for both backend and frontend.

### Development Environment Setup

Although the sample starter [hello-world-imba](https://github.com/somebee/hello-world-imba) is quite handy, in addition to this, I would like to separate my development and production environment, and I separate the client and server to 2 folders to make its structure clean. Then I found that the server side development server is not a hot reload one. Therefore I tried to do it.

### Pass Environment Variable

To do environment separation, first, we need to pass something like `NODE_ENV=dev` into program runtime. For the client side, it can be achieved by passing an additional flag`--env.NODE_ENV=dev` to the webpack command, then inside `webpack.config.js`, I can retrieve the env in the function parameter. Next, we can plug this environment variable into program runtime using webpack’s DefinePlugin.

```js
/// webpack.config.js
const webpack = require('webpack')
module.exports = env => {
  console.log(env)   //{NODE_ENV:"dev"}
  return {
    /*original parameters in starter*/
    plugins: [
      new webpack.DefinePlugin({ 'process.env':JSON.stringify({NODE_ENV:'production',...env})
      })
    ],
    entry: "./src/client/index.imba",
  }
}

/// src/client/index.imba
console.log process:env   //{NODE_ENV:"dev"}
```

As for the server side, in order to support cross-platform development, I used a node module called [cross-env](https://www.npmjs.com/package/cross-env), then the server start command will be `cross-env NODE_ENV=dev imba src/server/index.imba` , then the variable is retrievable by `process:env.NODE_ENV` .

Then I further played with it by making a config.js which plugs configurations to `process:config` in according to `NODE_ENV`

```js
/// config.js
const configs = {
  dev: {
    MODE: 'dev'
  },
  production: {
    MODE: 'production'
  }
}
module.exports = (key = 'production') => configs[key]

/// webpack.config.js
const webpack = require('webpack')
const configs = require('./config')
module.exports = env => ({
  ...
  plugins:[
    ...
    new webpack.DefinePlugin({
      "process.config": JSON.stringify(configs(env && env.NODE_ENV || 'production'))
    })
  ]
})

/// src/server/index.imba
//...
var config = require('../../config')(process:env.NODE_ENV)
process:config = config
```

And that’s how I make an easy switch in environment variables. maybe a bit hacky, but it works.

### Server Hot Reload

The client-side come with a hot reload development server already, but not our express server in imba. Then I tried `nodemon imba src/server/index.imba` , it fails. It seems because nodemon is trying to use node to execute imba script, which fails for sure. By further googling, I found what I missed is just a `--exec` flag, and I further limit the hot reload listening directory to be `src/`.

```sh
nodemon --watch src/ --exec cross NODE_ENV=dev imba src/server/index.imba
```

### Start Both Client and Server Development Server in One Command

My another friend [mcreng](http://github.com/mcreng) shared me a package called [concurrently](https://www.npmjs.com/package/concurrently) which is very easy to use. And so the final scripts looks like this

```json
{
"scripts": {
"start": "npm run build && cross-env NODE_ENV=production imba src/server/index.imba",
"dev": "concurrently --kill-others-on-fail \"npm run server-dev \" \"npm run client-dev\"",
"server-dev": "nodemon --watch src/ --exec cross-env NODE_ENV=dev imba src/server/index.imba",
"client-dev": "webpack-dev-server --env.NODE_ENV=dev --content-base dist/",
"build": "webpack",
"watch": "webpack --watch --progress --colors --display-modules"
}
}
```

Finally, start both client and server hot reload development server by running `npm run dev`

(PS: this is my first post in Medium, if you have any suggestions, please kindly tell me, thank you~)