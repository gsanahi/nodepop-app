const adsRouter = require("./ads")
const express = require('express');
const router = express.Router();

/* GET home page. */
router.use('/ads', adsRouter);

module.exports = router;
