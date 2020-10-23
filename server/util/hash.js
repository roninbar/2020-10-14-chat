/* eslint-disable dot-notation */
const crypto = require('crypto');

function hash(password) {
    return crypto
        .createHmac('sha256', process.env['SECRET'])
        .update(password)
        .digest('base64');
}

module.exports = hash;

