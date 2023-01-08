const express = require("express");
const router = express.Router();
const tags = require("../models/tags");

// ruta que me devuelve la lista de tags
router.get("/list", (req, res) => {
  res.json(tags);
});

module.exports = router;
