const express = require('express');
const {search, findById } = require('../repositories/ads');
const router = express.Router();

router.get('/list', async (req, res, next) => {
    // {minPrice: 100,, maxPrice: 500}
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
   
  
  module.exports = router;
  