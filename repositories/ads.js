const Ad = require('../models/ad');
//Funcion que me va a dar el listado de todos los anuncios
function all(minPrice,maxPrice) {
    return Ad.find({price: {$gte: minPrice, $lte: maxPrice}}).exec();
}


function findById(id) {
    return Ad.findById(id).exec();
}



module.exports = {all,findById};