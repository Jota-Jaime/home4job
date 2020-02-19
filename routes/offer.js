const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Offer = require("../models/Offer");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/all", (req, res, next) => {
  Offer.find().then((allOffers) => {
    res.render("offer/home", {allOffers});
  })
});

router.get('/newoffer', (req,res,next) => {
  res.render('offer/newOffer')
});

router.get('/:id', (req,res,next) => {
  Offer.findById(req.params.id)
  .populate('user')
  .then((foundOffer) =>{
    res.json(foundOffer);
  });
});



router.get('/', (req,res,next) => {
  let city = req.query.city
  let job = req.query.job
  if (city === "all") {
    Offer.find({job: job})
    .then((foundOffers) =>{
    res.json(foundOffers);
  });
  }
  if (job === "all") {
    Offer.find({city: city})
    .then((foundOffers) =>{
    res.json(foundOffers);
  });
  }
  if (city !== "all" && job !== "all") {
  Offer.find({city: city, job: job})
  .then((foundOffers) =>{
    res.json(foundOffers);
  });
  }
  Offer.find()
  .then((foundOffers) => {
    res.json(foundOffers);
  });
});


module.exports = router;