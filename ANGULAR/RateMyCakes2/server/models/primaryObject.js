const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  rating: { type: Number,required: true},
  content: {type: String,minlength: [10, "At least 10 characters long"]
  }
}, { timestamps: true });

const CakeSchema = new mongoose.Schema({
  name: {type: String,required: true,minlength: [2, "At least 2 characters long"]
  },
  image: { type: String,required: true},
  comment: [CommentSchema]
  
}, { timestamps: true });

module.exports = {
  Cakes: mongoose.model('Cakes',CakeSchema),
  Comments: mongoose.model('Comments',CommentSchema)
}