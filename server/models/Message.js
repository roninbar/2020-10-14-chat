const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    time: String,
    sender: String,
    recipient: String,
    text: String,
});

module.exports = mongoose.model('Message', messageSchema);