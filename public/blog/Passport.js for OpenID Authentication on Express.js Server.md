# Passport.js for OpenID Authentication on Express.js Server

Actually I am just copying the implementation from wiki.js YO

### Required node modules

1. passport
2. passport-openidconnect
3. express
4. express-section

### Flow

1. user login to website at `localhost:4219/login`

2. express server receive the request, call passport.js to login by oidc
3. oidc service provider receive login, user give login permission
4. oidc service provider redirect user to oidc callback url, which is `localhost:4219/login/oidc/callback`
5. express server receive the callback, give it to passport.js to process
6. passport.js serialize the callback detail, which is the user information, and put it to express session, and redirect user to `localhost:4219`
7. whenever login user visit a website, we can obtain his info in `req.session.passport.user`

### Obtain a OpenID Service

I used GitLab openid

![img](./img/openid1.jpg)

![img](./img/openid2.jpg)

```js
//oidc configurations
const oidc = {
  clientId: '39c57783....', //1
  clientSecret: 'd2d6d7d....',  //2
  issuer: 'https://gitlab.com',
  userInfoUrl: 'https://gitlab.com/oauth/userinfo',
  authorizationURL: 'https://gitlab.com/oauth/authorize',
  tokenURL: 'https://gitlab.com/oauth/token',
  emailClaim: '_json.email',
  usernameClaim: '_json.nickname'
}
```



### Implement it

```js
//import the modules
const passport = require('passport')
const express = require('express')
const session = require('express-session')

//define middlewares
const app = express()
app.use(session({
  name: 'passport.sid',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

//start the express server
const port = process.env.PORT || 4219
var s = app.listen(port,()=>{
	console.log('server is running on port ' + port)
})

//oidc configurations
const oidc = {
  clientId: '39c57783....', //1
  clientSecret: 'd2d6d7d....',  //2
  issuer: 'https://gitlab.com',
  userInfoUrl: 'https://gitlab.com/oauth/userinfo',
  authorizationURL: 'https://gitlab.com/oauth/authorize',
  tokenURL: 'https://gitlab.com/oauth/token',
  emailClaim: '_json.email',
  usernameClaim: '_json.nickname'
}

//app config
const appconfig = {
  host:'http://localhost:'+port,
  auth: {oidc}
}

//define routes
app.get('/login',passport.authenticate('oidc'))
app.get('/login/oidc/callback', passport.authenticate('oidc', { failureRedirect: '/', successRedirect: '/' }))
app.get('/',(req,res)=>{
  console.log(req.session)
  return res.send('hello')
})

//implement the way passportjs serialize and deserialize a user
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

//implement the way passportjs handle oidc login behaviour
const OIDCStrategy = require('passport-openidconnect').Strategy
passport.use('oidc', new OIDCStrategy({
    userInfoURL: appconfig.auth.oidc.userInfoUrl,
    authorizationURL: appconfig.auth.oidc.authorizationURL,
    tokenURL: appconfig.auth.oidc.tokenURL,
    clientID: appconfig.auth.oidc.clientId,
    clientSecret: appconfig.auth.oidc.clientSecret,
    issuer: appconfig.auth.oidc.issuer,
    callbackURL: appconfig.host + '/login/oidc/callback'
}, (iss, sub, profile, jwtClaims, accessToken, refreshToken, params, cb) => {
    console.log(profile)
    return cb(null, profile) || true
}))
```

