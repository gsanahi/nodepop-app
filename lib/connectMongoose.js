'use strict'

const mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.0.17:27017/nodepop-app');

module.exports = mongoose.connection;
