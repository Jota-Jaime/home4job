const express = require('express');
const router  = express.Router();
const User = require("../models/User");
const Offer = require("../models/Offer");
const uploadCloud = require('../config/cloudinary.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {layout: false});
});

module.exports = router;
