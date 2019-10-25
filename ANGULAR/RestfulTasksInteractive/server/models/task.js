
const mongoose = require('mongoose');

//Model

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Title is required'],
    minlength: [5, 'min len is 5'],
    unique: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
}, {
  timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

