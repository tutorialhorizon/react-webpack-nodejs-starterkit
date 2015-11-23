react-webpack-nodejs-starterkit
===========

This starter kit contains

- [x] React 0.14
- [x] React-Router 1.x
- [x] Webpack
- [x] React Hot Loading - to auto reload your UI components
- [x] Stylus and nib CSS preprocessors
- [x] Babel es6 transpiling
- [x] Nodemon - to watch server files
- [x] Express server integrated with hot loading
- [x] Bootstrap styles

#### Redux integrations
- [x] reselect
- [x] redux-thunk - store middleware
- [] redux-actions - for creating FSA i.e. [Flux Standard Actions](https://github.com/acdlite/flux-standard-action)

#### Other goodies
- [x] winston for logging at the express server.
- [x] npm scripts for building production and development assets
- [ ] jshint npm script
- [ ] Static files are served from `public/` using expres.static.

---

#### npm scripts
```
$ npm run hot-dev
```
Watches for changes to your react components in the `/flux` directory as well as sets up nodemon to watch your `/server` directory and automatically reloads everything!

```
$ npm run dev
```
Run this when you dont want any file watching but need to use development configuration from `/configs/index.js`

```
$ npm run prod
```
Run this when you want production configuration from `/config/index.js` and production settings for webpack.

See the package.json scripts section for more details on the scripts.

---
