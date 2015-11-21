'use strict';

var hour = 3600000;

module.exports = {
    // Dev environment config goes here
    development: {
        session: {
            SESSION_SECRET: 'This secret cannot be revealed',
            name: 'Starter Kit',
            maxAge: hour * 12
        },
        PORT: process.env.PORT || 15000,
        bcrypt: {
            salt: 12
        },
        winston: {
            level: 'debug'
        },
        WEBPACK_PORT: 8081
    },

    // Production environment config goes here
    production: {
        session: {
            SESSION_SECRET: 'This secret cannot be revealed',
            name: 'Starter Kit',
            maxAge: hour * 12
        },
        PORT: process.env.PORT || 15000,
        bcrypt: {
            salt: 12
        },
        winston: {
            level: 'info'
        }
    }
};
