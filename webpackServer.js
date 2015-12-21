'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var appConfig = require('./config');
var loggingConfig = require('./webpack/loggingConfig');
var proxy = require('proxy-middleware');
var url = require('url');
var _ = require('lodash');

function setupDev(app) {
    var PORT = appConfig[process.env.NODE_ENV].WEBPACK_PORT;

    // proxy the request for static assets
    app.use('/assets', proxy(url.parse('http://localhost:'+ PORT + '/assets')));
}

function start2() {
    var config;

    console.log('here', process.env.NODE_ENV);
    var PORT = appConfig[process.env.NODE_ENV].WEBPACK_PORT;
    if (process.env.HOT) {
        config = require('./webpack/hot-dev-config');
    } else if (process.env.NODE_ENV === 'development') {
        config = require('./webpack/dev-config');
    }

    // -----your-webpack-dev-server------------------
    var server = new WebpackDevServer(webpack(config), 
        _.assign(
            {},
            loggingConfig,
            {
                contentBase: __dirname + '/build',
                hot: true,
                publicPath: config.output.publicPath
            }
        )
    );

    server.listen(PORT, "localhost", function() {});
}

module.exports = {
    setupDev: setupDev,
    start2: start2,
    // start: function (app) {
    //     var PORT = appConfig[process.env.NODE_ENV].WEBPACK_PORT;
    //     var config;

    //     // proxy the request for static assets
    //     app.use('/assets', proxy(url.parse('http://localhost:'+ PORT + '/assets')));

    //     if (process.env.HOT) {
    //         config = require('./webpack/hot-dev-config');
    //     } else if (process.env.NODE_ENV === 'development') {
    //         config = require('./webpack/dev-config');
    //     }

    //     // -----your-webpack-dev-server------------------
    //     var server = new WebpackDevServer(webpack(config), 
    //         _.assign(
    //             {},
    //             loggingConfig,
    //             {
    //                 contentBase: __dirname + '/build',
    //                 hot: true,
    //                 publicPath: config.output.publicPath
    //             }
    //         )
    //     );

    //     server.listen(PORT, "localhost", function() {});
    // }
};