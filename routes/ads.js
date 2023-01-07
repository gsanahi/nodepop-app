const express = require('express');
const { all, findById } = require('../repositories/ads');
const router = express.Router();

router.get('/list', async (req, res, next) => {
    // {minPrice: 100,, maxPrice: 500}
    const minPrice = Number(req.query.minPrice);
    const maxPrice = Number(req.query.maxPrice);
    const ads = await all(minPrice,maxPrice);
    res.json(ads);
  });

router.get('/:id',async (req,res,next) => {
    const {id} = req.params
    const product = await findById(id);
    if (product != null) {
        res.json(product)
    }else {
       res.sendStatus(404) 
    } 
});
   
  
  module.exports = router;
  