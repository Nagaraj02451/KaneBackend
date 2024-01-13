const mongoose = require("mongoose")

const TravelContact = mongoose.Schema({
    Name:String,
    Number : String,
    Email : String,
    Message : String
  });

module.exports = mongoose.model('contact', TravelContact);

