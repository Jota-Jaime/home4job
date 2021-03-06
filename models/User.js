const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  name: String,
  imgPath: {
    type: String,
    default: `../images/default.png`
  },
  description: String,
  languages: {
    type: [String],
    enum: [`español`, `inglés`, `portugués`, `francés`, `alemán`, `italiano`, `otro`]
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
