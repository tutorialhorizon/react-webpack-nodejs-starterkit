react-webpack-nodejs-starterkit
===========

This starter kit contains the following core libraries *and then some more to integrate with redux*.

---

#### Basic integrations

- [x] React 0.14
- [x] React-Router 1.x
- [x] Webpack
- [x] React Hot Loading - to auto reload your UI components
- [x] Stylus CSS preprocessor with nib
- [x] Babel es6 transpiling
- [x] Nodemon - to watch server files
- [x] A basic Express application server that integrates with hot loading
- [x] Bootstrap styles

#### Redux integrations

- [x] reselect - For high performance memoized selectors to be used with higher order components.
- [x] react-redux - To connect your higher order components to redux stores
- [x] redux-router - Wrapper over react-router to expose routes as part of yout state object itself
- [x] redux-thunk - store middleware
- [x] redux-actions - for creating FSA i.e. [Flux Standard Actions](https://github.com/acdlite/flux-standard-action)
- [x] seamless-immutable - For data in the stores
- [ ] redux-devtools

#### Other goodies
- [x] winston for logging at the express server.
- [x] npm scripts for building production and development assets
- [ ] jshint npm script
- [x] Static files are served from `public/` using expres.static.

---

#### npm scripts
You can run the app in a snap using the npm scripts described below. These scripts cause the app to read the configuration from [/config/index.js](https://github.com/tutorialhorizon/react-webpack-nodejs-starterkit/blob/redux-integrations/config/index.js).

```
$ npm run hot-dev
```
Watches for changes to your react components in the `/src` directory as well as sets up nodemon to watch your `/server` directory and automatically reloads everything!

```
$ npm run dev
```
Run this when you dont want any file watching but need to use development configuration from [/config/index.js](https://github.com/tutorialhorizon/react-webpack-nodejs-starterkit/blob/redux-integrations/config/index.js).

```
$ npm run prod
```
Run this when you want production configuration from [/config/index.js](https://github.com/tutorialhorizon/react-webpack-nodejs-starterkit/blob/redux-integrations/config/index.js) and production settings for webpack.

See the package.json scripts section for more details on the scripts.

---
