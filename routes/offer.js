const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Offer = require("../models/Offer");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const nodemailer = require("nodemailer")

router.get("/all", (req, res, next) => {
  let user=req.user
  Offer.find().then((allOffers) => {
    res.render("offer/home", { allOffers, user});
    // res.json(user)
  })
});

router.get("/contact", (req, res, next) => {
  Offer.find().then(() => {
    res.render("offer/contact");
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
  let user = req.body
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


router.post('/contact', (req, res, next) => {
  console.log("hola")
 
  let { email, subject, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'hackmerla@gmail.com',
      pass: 'ironhack1'
    }
  });


  transporter.sendMail({
    from: '"My Awesome Project " <myawesome@project.com>',
    to: "hackmerla@gmail.com", 
    subject: `Home4Job - Tienes una nueva solicitud `, 
    text: message,
    html: `<b>${message}</b>`
  })
  .then(info => res.redirect('/offer/all'))
  .catch(error => console.log(error));
});

module.exports = router;