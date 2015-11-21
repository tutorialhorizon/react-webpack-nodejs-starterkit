'use strict';

var winston = require('winston');
var requestIp = require('request-ip');
var _ = require('lodash');

module.exports = {
    logRequest: function (req, res, next) {
        var message = '';
        var origUrl = req.originalUrl;
        var ipLogMessages = [];

        var user = _.get(req, 'session.passport.user', {id: 'guest_user_id'});

            if (!origUrl.match(/.css/) && !origUrl.match(/.js/)) {
                if (user) {
                message += 'uid:' + user.id + "|";
            }
            message += req.method + ':' + origUrl;
            console.log(message);

            if (origUrl.match(/home\.html/)) {
                ipLogMessages.push('ip_address:' + requestIp.getClientIp(req));
                ipLogMessages.push('uid:' + (user ? user.id : null));

                console.log(ipLogMessages.join(','));
            }
        }
        next();
    }

}
