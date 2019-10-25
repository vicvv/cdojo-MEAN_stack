const mongoose = require('mongoose');

//Model

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    //required: [true, 'Title is required'],
    minlength: [5, 'min len is 5'],
    //unique: true
  },
  description: {
    type: String,
    trim: true,
    default: '',
  },
  imageurl: {
    type: String,
    trim: true,
    default: '',
  },
  rating: [{type: String, default: ''}] ,
  comment: [{type: String, default: ''}]
 
}, {
  timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

