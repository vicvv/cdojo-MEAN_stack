const mongoose = require('mongoose');

//Model

const PersonSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required!'],
        minlength:3
      },    
      
    },{timestamps:true});

const Person = mongoose.model('Person', PersonSchema);
