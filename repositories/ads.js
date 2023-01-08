const Ad = require("../models/ad");

// Funcion que me crea un Ad
function create(name, price, sale, tags, photo) {
  const ad = new Ad({ name, price, sale, tags, photo });
  return ad.save();
}

// Funcion que me va a dar el listado de todos los anuncios filtrados
function search(name, tag, isSale, minPrice, maxPrice, fixedPrice, start, limit, sort) {
  const myfilters = {};
  if (name) {
    myfilters.name = new RegExp(`^${name}`, "i");
  }
  if (tag) {
    myfilters.tags = tag;
  }
  if (isSale != undefined) {
    myfilters.sale = isSale;
  }

  if (fixedPrice != undefined) {
    myfilters.price = fixedPrice;
  } else if (minPrice != undefined || maxPrice != undefined) {
    myfilters.price = {};
    if (minPrice != undefined) {
      myfilters.price.$gte = minPrice;
    }
    if (maxPrice != undefined) {
      myfilters.price.$lte = maxPrice;
    }
  }

  return Ad.find(myfilters).skip(start).limit(limit).sort(sort).exec();
}

// Funcion que me encuentra un anuncio por id
function findById(id) {
  return Ad.findById(id).exec();
}

module.exports = { create, findById, search };
