/* eslint-disable linebreak-style */
const cookieParser = require('cookie-parser');
const api = require('./routes/api');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const debug = require('debug');

const MONGODBURL = process.env['MONGODBURL'];

debug('server:mongodb')(`Connecting to ${MONGODBURL}...`);
mongoose.connect(MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', error => debug('server:mongodb')(error));
mongoose.connection.on('open', () => debug('server:mongodb')('Connected.'));

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;

