let mongoose = require('mongoose');

// Animal Schema
let animalSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  color:{
    type: String,
    required: true
  },
  favfood:{
    type: String,
    required: true
  },
  origin:{
    type: String,
    required: true
  }
});

let Animal = module.exports = mongoose.model('Animal', animalSchema);