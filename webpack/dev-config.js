var appConfig = require('../config');

module.exports = require("./make-config")({
    devServer: true,
    devtool: 'eval',
    PORT: appConfig[process.env.NODE_ENV].WEBPACK_PORT
});