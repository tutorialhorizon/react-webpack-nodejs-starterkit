'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var appConfig = require('./config');
var loggingConfig = require('./webpack/loggingConfig');
var proxy = require('proxy-middleware');
var url = require('url');
var _ = require('lodash');

module.exports = {
    start: function (app) {
        var PORT = appConfig[process.env.NODE_ENV].WEBPACK_PORT;
        var config;

        // proxy the request for static assets
        app.use('/assets', proxy(url.parse('http://localhost:'+ PORT + '/assets')));

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
};