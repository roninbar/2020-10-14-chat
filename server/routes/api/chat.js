const express = require('express');
const Message = require('../../entities/Message');

const chatApi = new express.Router();

chatApi.get('/sender/:sender/recipient/:recipient', async function ({ params: { sender, recipient } }, res) {
    const messages = await Message.find({ sender, recipient });
    res.json(messages);
});

module.exports = chatApi;

