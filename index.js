'use strict';

var appConfig = require('./config');
var environment = process.env.NODE_ENV || 'production';
if (!appConfig[process.env.NODE_ENV]) {
	throw new Error('Missing config for the environment ' + environment);
}

global.ROOT = __dirname;
global.Promise = require('bluebird');

var express = require('express');
var http = require('http');
var winston = require('winston');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');

var flash = require('connect-flash');
// --- Passport based authentication ----

var mw = require('./server/middleware');

var app = express();
var config = appConfig[process.env.NODE_ENV];
winston.level = config.winston.level;

if (environment === 'development') {
	require('./webpackServer').setupDev(app);
	// require('./webpackServer').start(app);
}

global.config = config;

var appEnv = {
	config: config
};

// Settngs for all environments
app.set('port', process.env.PORT || config.PORT);


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
	name: config.session.name,
	secret: config.session.SESSION_SECRET,
	maxAge: config.session.maxAge,
	saveUninitialized: true,
	resave: true
}));
app.use(express.static(__dirname + '/public'));
// app.use(passport.initialize());

// --- Custom Middleware ---
app.use(mw.logRequest); // Log the request for every route
// ------

// Route handlers
require('./server/routes')(app, appEnv);

http.createServer(app).listen(app.get('port'), function() {
	winston.info('Express server listening on port ' + app.get('port'));
});
