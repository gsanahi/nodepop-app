const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  sale: {
    type: Boolean,
    required: true,
    index: true,
  },
  price: {
    type: Number,
    required: true,
    index: true,
  },
  photo: {
    type: String,
    required: false,
  },
  tags: {
    type: [String],
    required: false,
    index: true,
  },
});

const Ad = mongoose.model("Ad", adSchema);

module.exports = Ad;
