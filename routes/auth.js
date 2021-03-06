const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Offer = require("../models/Offer");
const bcrypt = require("bcrypt");
const multer = require('multer');
const bcryptSalt = 10;
const uploadCloud = require('../config/cloudinary.js');



router.get("/login", (req, res, next) => {
  res.render("auth/login", {
    "message": req.flash("error")
  });
});


router.post("/login", passport.authenticate("local", {
  successRedirect: "/offer/all",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));


router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", uploadCloud.single("photo"), (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const description = req.body.description;
  const languages = req.body.languages;
  if (username === "" || password === "") {
    res.render("auth/signup", {
      message: "Indicate username and password"
    });
    return;
  }

  User.findOne({
    username
  }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", {
        message: "The username already exists"
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      name,
      description,
      languages,
    });

    newUser.save()
      .then(() => {
        // res.json(newUser)
        res.redirect(`/auth/login`);
      })
      .catch(err => {
        res.render("auth/signup", {
          message: "Something went wrong"
        });
      })
  });
});



router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;