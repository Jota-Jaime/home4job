const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Offer = require("../models/Offer");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/", (req, res, next) => {
  Offer.find().then((allOffers) => {
    res.render("offer/home", {allOffers});
  })
});

router.get('/:id', (req,res,next) => {
  Offer.findById(req.params.id).then((foundOffer) =>{
    res.json(foundOffer);
  });
});

module.exports = router;