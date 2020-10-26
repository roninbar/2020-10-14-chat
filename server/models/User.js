const mongoose = require('mongoose');
const hash = require('../util/hash');

const userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String,
    },
    username: { type: String, lowercase: true, trim: true, unique: true },
    passwordHash: String,
});

userSchema.virtual('password').set(function (password) {
    this.passwordHash = hash(password);
});

userSchema.method('verify', function (password) {
    return this.passwordHash === hash(password);
});

module.exports = mongoose.model('User', userSchema);