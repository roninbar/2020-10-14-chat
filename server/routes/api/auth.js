const User = require('../../entities/User');
const jwt = require('jsonwebtoken');
const express = require('express');
const debug = require('debug');

const SECRET = process.env['SECRET'];

const authApi = new express.Router();

authApi.post('/login', async function ({ body: { username, password } }, res) {
    const user = await User.findOne({ username });
    return user && user.verify(password)
        ? res.json({ token: jwt.sign({ userId: user._id }, SECRET, { expiresIn: '1m' }) })
        : res.sendStatus(401);
});

authApi.post('/logout', function (req) {
    debug('server:auth')('Logging out', req);
});

module.exports = authApi;

