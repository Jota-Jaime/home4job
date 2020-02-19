const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Offer = require("../models/Offer");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/", (req, res, next) => {
  let {id}=req.parsms
  User.find(id).then((user) => {
    res.render("user/home", {user});
  })
});


router.get('/editUser/:id', (req,res,next) => {
  let {id}=req.params
  User.findById(id)
  .then((foundUser) =>{
    res.render(`user/editUser`,{foundUser})
  });
});


module.exports = router;