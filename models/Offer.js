const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({

  city: {
    type: [String],
    enum:[`Madrid`,`Barcelona`,`Valencia`, `Sevilla`, `Bilbao`, `Zamora`]
  },
  // loc: { type: "Point", coordinates: [ latitude , longitude ] },
  job:{
    type: [String],
    enum: ["Jardineria", "Limpieza", "Reparacion","Cuidador"],
  },
  photo: {
    type: String,
    default: `../images/nophoto.jpg`
  },
  dayStart: Date,
  dayEnd: Date,
  status: {
    type: [String],
    enum: ["active", "in process", "end"],
    default: "active"
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: "User"}

});

const Offer = mongoose.model('Offer', userSchema);
module.exports = Offer;
