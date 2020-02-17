const express = require('express');
const router  = express.Router();
const User = require("../models/User");
const Offer = require("../models/Offer");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {layout: false});
});

module.exports = router;
