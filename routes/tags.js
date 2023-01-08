const express = require('express');
const router = express.Router();
const tags = require('../models/tags')

router.get('/list', (req, res) => {
    res.json(tags);
})

module.exports = router;
