var path = require('path');
var webpack = require("webpack");
var _ = require('lodash');
var loggingConfig = require('./loggingConfig');
var nib = require('nib');

module.exports = function (options) {
    var jsxLoaders = ['babel-loader'];
    var entry = [path.resolve(__dirname, '../flux/Routes.jsx')];
    var plugins = [];

    if (options.hotComponents) {
        jsxLoaders = ['react-hot-loader'].concat(jsxLoaders);

        entry = [
          'webpack/hot/only-dev-server',
          'webpack-dev-server/client?http://localhost:' + options.PORT + '/' 
        ].concat(entry);

        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    var loaders = [
        {
            test: /\.jsx?$/,
            loaders: jsxLoaders,
            exclude: /node_modules/
        },
        {
            test: /\.js?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        },
        { 
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader',
            exclude: /node_modules/
        },
        { 
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            exclude: /node_modules/
        },
        {
            test: /\.svg$/,
            loader: 'url-loader?limit=10000'
        },
        {
            test: /\.woff$/,
            loader: 'url-loader?limit=10000'
        },
        {
            test: /\.woff2$/,
            loader: 'url-loader?limit=10000'
        },
        {
            test: /\.eot$/,
            loader: 'url-loader?limit=10000'
        },
        {
            test: /\.ttf$/,
            loader: 'url-loader?limit=10000'
        }
    ];

    return _.assign(
        {}, 
        loggingConfig,
        {
            devtool: options.devtool,
            entry: entry,
            output: {
                path: path.resolve(__dirname, '../public/assets/js'),
                filename: 'bundle.js',
                publicPath: options.devServer ? 'http://localhost:' + options.PORT + '/assets/js' : null
            },
            plugins: plugins,
            module: {
                loaders: loaders
            },
            stylus: {
                use: [nib()]
            }
        }
    );
};