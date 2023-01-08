const express = require('express');
const {create, search, findById } = require('../repositories/ads');
const myTags = require('../models/tags');
const router = express.Router();

router.get('/list', async (req, res, next) => {
      try{
      const {price, name, tag, sale, start, limit, sort} = req.query;
      let fixedPrice, minPrice, maxPrice; 
      if (price) {
        const split = price.split('-');
      
        if (split.length === 1) {
          fixedPrice = Number(split[0]);
        } else if (split.length === 2) {
          minPrice = Number(split[0]) || undefined;
          maxPrice = Number(split[1]) || undefined;
        }
      }
      
      let isSale;
      if (sale) {
        if (sale === "true") {
          isSale = true;
        } else {
          isSale = false;
        }
      }
              
      const ads = await search(name, tag, isSale, minPrice,maxPrice,fixedPrice, Number(start)|| 0, Number(limit)|| 5, sort);
      res.json(ads);
    } catch(err) {
      next(err)
    }
  });

router.get('/:id',async (req,res,next) => {
  try{
    const {id} = req.params
    const product = await findById(id);
    if (product != null) {
        res.json(product)
    }else {
       res.sendStatus(404) 
    } 
  } catch(err) {
    next(err)
  }    
});

router.post('/', async (req, res, next) => {
  try {
    const {name, price, sale, tags, photo} = req.body;
    let error;
    if (!name) {
      error = 'Nombre inválido';
    }
    if (typeof price != 'number' || price < 0) {
      error = 'Precio inválido';
    }
    if (sale !== true && sale !== false) {
      error = 'Venta inválida';
    }
    if (!Array.isArray(tags) || !tags.every(tag => myTags.includes(tag))) {
      error = 'Tag inválido';
    }
    if (!photo) {
      error = 'Foto inválida';
    }
    if (error) {
      res.status(400).json({error});
      next();
    }

    const ad = await create(name, price, sale, tags, photo)
    res.json(ad);
  } catch(err) {
    next(err);
  }
})
  
module.exports = router;
  