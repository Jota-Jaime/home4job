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

// router.get(`/`, (req, res, next) => {
//   let user = req.user
//   res.redirect(`/user`, {user})
// });

router.get('/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  let {
    id
  } = req.params
  let user = req.user
  User.findById(id)
    .then((foundUser) => {
      res.render(`user/home`, {foundUser,user})
    });
});


router.get('/editUser/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  let {id} = req.params
  User.findById(id)
    .then((foundUser) => {
      res.render(`user/editUser`, {foundUser})
    });
});


router.post('/editUser/:id', uploadCloud.single("photo"), (req, res, next) => {
  let {id} = req.params
  console.log(id)
  User.findByIdAndUpdate(id, {
      name: req.body.name,
      description: req.body.description,
      languages: req.body.languages,

    }, {
      new: true
    })
    .then(() => {
      res.redirect(`/offer`);
      // res.json(user)
    });
});



module.exports = router;