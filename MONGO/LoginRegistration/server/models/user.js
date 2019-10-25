const mongoose = require('mongoose');
//User Model

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required!'],
        minlength:3
      },
    email:{
      type: String,
      required: [true, 'Email is required!'],    
    },
    username:{
      type: String,
      required: [true, 'User Name is required!'],
    },
    password:{
      type: String,
      required: [true, 'Password is required!'],
      // validate: {
  // 	validator: function(value){
  // 		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,120}/.test(value);
  // 	},
  // 	message: "Password must contain at least 1 number, Uppercase Letter, and special character."
      // } 
    },

    birthday:{
      type: Date,
      required: [true, 'B day is required!'],
    },
    
  });

const User = mongoose.model('User', UserSchema);
