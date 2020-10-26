const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const express = require('express');
const debug = require('debug');

const SECRET = process.env['SECRET'];

const authApi = new express.Router();

authApi.post('/login', async function ({ body: { username, password } }, res) {
    const user = await User.findOne({ username });
    const token = user && user.verify(password) && jwt.sign(user.toObject(), SECRET, { expiresIn: '10 minutes' });
    return token ? res.json({ token }) : res.sendStatus(401);
});

authApi.post('/logout', function ({ headers: { authorization }, user }, res) {
    debug('server:auth')('Logging out', user);
    const { groups: { token } } = authorization.match(/^Bearer (?<token>[^\s]+)/);
    // TODO: Add the token to a list of revoked tokens.
    return res.sendStatus(token && verify(token) ? 205 : 400);
});

module.exports = authApi;

function verify(token) {
    try {
        return jwt.verify(token, SECRET);
    } catch (err) {
        return false;
    }
}
