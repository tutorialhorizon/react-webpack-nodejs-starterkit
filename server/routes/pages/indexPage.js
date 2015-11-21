'use strict';

module.exports = function renderIndex(req, res, next) {
    res.sendFile(ROOT + '/public/index.html');
}