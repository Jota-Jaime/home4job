const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique:true,
    required: true
  },
  password: String,
  name: String,
  avatar: {
    type: String,
    default: `../images/default.png`
  },
  description: String,
  avarageValue: {
    tipe: Number,
    default: `Sin experiencias previas.`
  },
  languages: {
    type: String,
    enum: [`español`, `inglés`, `portugués`, `francés`, `alemán`, `italiano`, `otro`],

  },
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
