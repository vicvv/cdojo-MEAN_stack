const mongoose = require('mongoose');

//Model

const TaskSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Title is required!'],
        minlength:3,
        unique: true
      }, 
    description:{
      type: String,
      required: true,
      default: 'change me',
    },
    completed:{
      type: Boolean,
      defalut: false,
      equired: true,
    }  
      
    },{timestamps: true});

const Task = mongoose.model('Task', TaskSchema);
