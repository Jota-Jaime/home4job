const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Offer = require("../models/Offer");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});


router.get('/newuser', (req, res, next) => {

  User.findById(id)
      .then(user=> {
          res.render('auth/newUser', { user });
      });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/offer",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));


router.post('/newuser', (req, res, next) => {
  let id=req.body.id
  User.findByIdAndUpdate(
      id,
      {
          name: req.body.name,
         description: req.body.description,
      },
      { new: true }
  )
      .then(() => {
          res.redirect('/offer/home');
      });
});


router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save()
    .then(() => {
      // res.json(newUser)
      res.redirect(`/auth/newUser`);
    })
    .catch(err => {
      res.render("auth/signup", { message: "Something went wrong" });
    })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
