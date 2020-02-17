const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
});

const Offer = mongoose.model('Offer', userSchema);
module.exports = Offer;
