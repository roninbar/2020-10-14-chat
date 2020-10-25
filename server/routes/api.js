const expressJwt = require('express-jwt');
const express = require('express');
const _ = require('lodash');
const authApi = require('./api/auth');
const chatApi = require('./api/chat');
const User = require('../models/User');

const SECRET = process.env['SECRET'];

const api = new express.Router();

api.use('/auth', authApi);

api.use('/chat', expressJwt({ secret: SECRET, algorithms: ['HS256'] }), chatApi); 

const userApi = new express.Router();

userApi.get('/:id', async function ({ params: { id } }, res) {
    const user = await User.findById(id);
    return user ? res.json(_(user.toObject()).omit('passwordHash')) : res.sendStatus(404);
});

userApi.post('/', async function ({ body: { firstName, lastName, username, password } }, res) {
    const user = new User({ name: { first: firstName, last: lastName }, username, password });
    const { _id: userId } = await user.save();
    return res.set('Location', `/api/user/${userId}`).sendStatus(201);
});

api.use('/user', userApi);

module.exports = api;