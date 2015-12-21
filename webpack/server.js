'use strict';

// Libraries
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var proxy = require('proxy-middleware');
var url = require('url');
var _ = require('lodash');

// Application files
var appConfig = require('../config');
var loggingConfig = require('./loggingConfig');

function serveAssets(app) {
    var PORT = appConfig[process.env.NODE_ENV].WEBPACK_PORT;

    // proxy the request for static assets
    app.use('/assets', proxy(url.parse('http://localhost:'+ PORT + '/assets')));
}

function start() {
    var config;

    var PORT = appConfig[process.env.NODE_ENV].WEBPACK_PORT;
    if (process.env.HOT) {
        config = require('./hot-dev-config');
    } else if (process.env.NODE_ENV === 'development') {
        config = require('./dev-config');
    }

    // -----your-webpack-dev-server------------------
    var server = new WebpackDevServer(webpack(config), 
        _.assign(
            {},
            loggingConfig,
            {
                contentBase: __dirname + '/../build',
                hot: true,
                publicPath: config.output.publicPath
            }
        )
    );

    server.listen(PORT, 'localhost', function() {});
}

module.exports = {
    serveAssets: serveAssets,
    start: start
};