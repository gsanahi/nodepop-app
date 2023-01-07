const Ad = require('../models/ad');
//Funcion que me va a dar el listado de todos los anuncios
function search (name,tag,isSale, minPrice,maxPrice,fixedPrice, start, limit, sort) {
    const myfilters = {};
    if (name) {
        myfilters.name = new RegExp(`^${name}`,'i');
    }
    if (tag) {
        myfilters.tags = tag
    }
    if (isSale != undefined) {
        myfilters.sale = isSale
    }

    if (fixedPrice != undefined) {
        myfilters.price = fixedPrice
    } else if (minPrice != undefined || maxPrice != undefined) {
        myfilters.price = {}
        if (minPrice != undefined) {
            myfilters.price.$gte = minPrice;
        }
        if (maxPrice != undefined) {
            myfilters.price.$lte = maxPrice;
        }
    }
    
    return Ad.find(myfilters).skip(start).limit(limit).sort(sort).exec();
}


function findById(id) {
    return Ad.findById(id).exec();
}



module.exports = {search,findById};