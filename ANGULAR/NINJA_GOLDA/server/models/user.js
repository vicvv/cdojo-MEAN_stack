
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    //unique: true,
    //required: [true, 'Name is required'],
    minlength: [5, 'Name shold be more then 5 char long']  
  },
  gold: {type: Number, default: 0},
  log: [{type: String, default: ' '}]
} ,

{timestemps: true} )

const User = mongoose.model('User', userSchema)
