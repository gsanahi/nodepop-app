const mongoose = require('mongoose');


const adSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        index: true
    
    },
    sale: {
        type: Boolean,
        require: true,
        index: true
    },
    price: {
        type: Number,
        require: true,
        index: true
    }, 
    photo: {
        type: String,
        require: false
    }, 
    tags: {
        type: [String],
        require: false,
        index: true
    },     
  });

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad
