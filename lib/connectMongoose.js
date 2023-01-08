"use strict";

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/nodepop-app");

module.exports = mongoose.connection;
