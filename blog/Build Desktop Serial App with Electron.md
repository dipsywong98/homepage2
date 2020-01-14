# Build Desktop Serial App with Electron

### Download Electron

```bash
# 複製 Quick Start 儲存庫
$ git clone https://github.com/electron/electron-quick-start

# 進到儲存庫裡
$ cd electron-quick-start

# 安裝相依的套件並執行
$ npm install -g
```

### Download Electron Live for Live testing (Optional)

```bash
$ npm install electron-reload
```

and choose one of the options to put in `main.js`

```js
//Option A: soft reload(code is updated but the app doesn't restart)
require('electron-reload')(__dirname)

//hard reload(code is updated and the app restarts)
require('electron-reload')(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`)
})
```

### Test / Debugging Electron App

```bash
$ npm start
```

### npm install more dependencies

A very stupid thing of electron

```
npm install --save-dev electron-rebuild
```

### Release Electron App

It is stupid to let people download your raw code to run

https://github.com/electron-userland/electron-forge

### Developing on Windows

node-pre-gyp和py2.7

```
npm install --global --production windows-build-tools
```

### Integrate with React

https://github.com/chentsulin/electron-react-boilerplate

### Source

https://ourcodeworld.com/articles/read/524/how-to-use-live-reload-in-your-electron-project

https://electronjs.org/

https://github.com/electron-userland/electron-forge

https://www.jianshu.com/p/696fbdeb5b8a

https://blog.csdn.net/cut001/article/details/68922780

https://stackoverflow.com/questions/21658832/npm-install-error-msb3428-could-not-load-the-visual-c-component-vcbuild-ex