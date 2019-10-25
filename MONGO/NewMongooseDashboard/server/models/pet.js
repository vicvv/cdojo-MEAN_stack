const mongoose = require('mongoose');

//Model

const PetSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required!'],
        minlength:3
      }, 
      color:{
        type: String,
        required:[true, "Color is required"]
      },  
      favfood:{
        type: String,
        required:[true, "Please input the favfood"]
      },
      age:{
        type: String,
        required:[true, "Please enter age"]

      }
    },  {timestamps: true}  );

const Pet= mongoose.model('Pet', PetSchema);
