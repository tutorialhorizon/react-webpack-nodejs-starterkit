'use strict';

var express = require('express');
var router = express.Router();

var indexPage = require('./pages/indexPage');

module.exports = function (app, appEnv) {
    // The core router which directly handles 
    // all the requests from a client from a client
    app.use('/', router);

    // Divide all of your modules in different folders and
    // require them here
    
    // NOTE: The order in which you require your routes matters
    
    router.get('/messages', indexPage);
    router.get('/', indexPage);
};