const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Offer = require("../models/Offer");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const ensureLogin = require("connect-ensure-login")
const uploadCloud = require('../config/cloudinary.js');
const multer = require('multer');

router.get(`/`, (req, res, next) => {
  res.redirect(`/auth/login`, {
    user
  })
});


router.post("/editUser/photo/:id", uploadCloud.single('photo'), (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {
      imgPath: req.file.url
    }, {
      new: true
    })
    .then(() => {
      res.redirect(`/offer/all`);
      // res.json(user)
    });
})

router.get('/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  let {
    id
  } = req.params
  User.findById(id)
    .then((foundUser) => {
      res.render(`user/home`, {
        foundUser
      })
      // res.json(foundUser)
    });
});


router.get('/editUser/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  let {
    id
  } = req.params
  User.findById(id)
    .then((foundUser) => {
      res.render(`user/editUser`, {
        foundUser
      })
      // res.json(foundUser)
    });
});


router.post('/editUser/:id', (req, res, next) => {
  let {
    id
  } = req.params
  User.findByIdAndUpdate(id, {
      name: req.body.name,
      description: req.body.description,
      languages: req.body.languages,

    }, {
      new: true
    })
    .then(() => {
      res.redirect(`/offer/all`);
      // res.json(user)
    });
});






module.exports = router;