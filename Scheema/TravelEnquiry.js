const mongoose = require("mongoose")

const TravelEnquire = mongoose.Schema({
    Name:String,
    Number : String,
    Email : String,
    Message : String,
    Child : String,
    Adult : String
  });

module.exports = mongoose.model('enquiry', TravelEnquire);

