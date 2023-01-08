const adsRouter = require("./ads");
const tagsRouter = require("./tags");
const express = require("express");
const router = express.Router();

router.use("/ads", adsRouter);
router.use("/tags", tagsRouter);

module.exports = router;
