const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  title:{
    type: String,
    required: [true, 'Product needs a name'],
    minlength: [2,'at least 2 chars'],
    trim: true
  },
  url:{
    type: String,
    required: [true, 'Need product image url'],
  },
  price:{
    type: Number,
    require: [true, 'Please indicate the price'],
  }
}, {timestamps:true})

module.exports = mongoose.model('Product', ProductSchema);

