const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Offer = require("../models/Offer");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get('/', (req,res,next) => {
  let city = req.query.city
  let job = req.query.job
  let user = req.body

  if (city === "all" && job === "all")
  Offer.find()
  .then((foundOffers) => {
    console.log(foundOffers)
    res.json(foundOffers);
  
  })
  .catch(err => console.log(err))

  if (city === "all") {
    Offer.find({job: job})
    .then((foundOffers) =>{
      res.json(foundOffers);
  })
  .catch(err => console.log(err))

  }
  if (job === "all") {
    Offer.find({city: city})
    .then((foundOffers) =>{
      res.json(foundOffers);
  })
  .catch(err => console.log(err))

  }
  if (city !== "all" && job !== "all") {
    Offer.find({city: city, job: job})
    .then((foundOffers) =>{
      console.log(foundOffers)

      res.json(foundOffers);
  })
  .catch(err => console.log(err))

  }
 
});

router.get("/all", (req, res, next) => {
  let user=req.user
  Offer.find().then((allOffers) => {
    res.render("offer/home", { allOffers, user});
  })
});

router.get('/newoffer', (req,res,next) => {
  res.render('offer/newOffer')
});

router.post('/newoffer', (req,res,next) => {
  const user = req.user;
  const newOffer = new Offer({
    city: req.body.city,
    job: req.body.job,
    location
  })
  Offer.create(newOffer)
  .then((createdOffer) => {
    res.render('offer/gallery', {createdOffer, user})
  })
});

router.get('/newOffer/gallery',(req,res,next) => {
  res.render('offer/gallery')
})

router.get('/:id', (req,res,next) => {
  Offer.findById(req.params.id)
  .populate('user')
  .then((foundOffer) =>{
    res.json(foundOffer);
  });
});

module.exports = router;