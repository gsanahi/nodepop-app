// getting-started.js
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
const Ad = require('../models/ad');
const data = require('./data-db');
//array de objetos

async function main() {
    await mongoose.connect('mongodb://192.168.0.17:27017/nodepop-app');
    // limpiar base de datos antes de inicializarla
    await Ad.collection.drop().catch(() => {});
    // me aseguro de crear todos los indices
    await Ad.ensureIndexes();

    for(let i=0;i< data.length;i++) {
        const ad = data[i];
        const adNew = new Ad(ad);
        await adNew.save();
    }
    
    mongoose.disconnect();
        
}

main().catch(err => console.log(err));


