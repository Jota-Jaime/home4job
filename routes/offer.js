const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Offer = require("../models/Offer");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const nodemailer = require("nodemailer");
const ensureLogin = require("connect-ensure-login");
const uploadCloud = require('../config/cloudinary.js');
const multer = require('multer');
// const uploader = require(`../config/cloudinary-setup`)


router.get('/', (req,res,next) => {
  let city = req.query.city
  let job = req.query.job
  let user = req.body

  if (city === "all" && job === "all")
  Offer.find()
  .then((foundOffers) => {
    console.log(`Empiezo aquí:${foundOffers}`)
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

router.get("/contact", (req, res, next) => {
  let user=req.user
  Offer.find().then(() => {
    res.render("offer/contact", {user});
  })
});

router.get('/newoffer', (req,res,next) => {
  let user=req.user
  res.render('offer/newOffer',{user})
});

router.post('/newoffer',uploadCloud.single('photo'), (req,res,next) => {
  console.log("hola")
  const user = req.user;
  const newOffer = new Offer({
    city: req.body.city,
    job: req.body.job,
    location: [req.body.lat, req.body.lng],
    user: user.id,
    // imgPath: req.file.url
  })
  console.log(newOffer)
  Offer.create(newOffer)
  .then((createdOffer) => {
    // console.log(createdOffer)
    res.render('offer/all', {createdOffer, user})
  })
});





// router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
//   // console.log('file is: ', req.file)
//   if (!req.file) {
//     next(new Error('No file uploaded!'));
//     return;
//   }
//   // get secure_url from the file object and save it in the 
//   // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
//   res.json({ secure_url: req.file.secure_url });
// })

// router.get('/newoffer/gallery',(req,res,next) => {
//   res.render('offer/gallery')
// })

// router.post('/newoffer/gallery',uploadCloud.single('photo'), (req, res, next) => {
//   console.log(req.params.id)
//   Offer.findByIdAndUpdate(req.params.id, {
//     imgPath: req.file.url
//   }, {
//     new: true
//   })
//   .then(() =>{
//     res.redirect('/offer/all')
//   });
// })

router.get('/:id', (req,res,next) => {
  Offer.findById(req.params.id)
  .populate('user')
  .then((foundOffer) =>{
    res.json(foundOffer);
  });
});

router.post('/contact', (req, res, next) => {
  console.log("hola")
  let user=req.user
 
  let { email, subject, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'hackmerla@gmail.com',
      pass: 'ironhack1'
    }
  });

  transporter.sendMail({
    from: '"Home4Job " <myawesome@project.com>',
    to: ``, 
    subject: `Home4Job - Tienes una nueva solicitud `, 
    text: message,
    html: `<b>Hola!!! Desde el equipo de Home4Job le informamos que tiene una mensaje de ${user.name} a una de sus ofertas publicadas:<br>${message}</b>`
  })
  .then(info => res.redirect('/offer/all'))
  .catch(error => console.log(error));
});

module.exports = router;