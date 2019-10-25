const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.join(__dirname, '../models');

// mongoose.connect('mongodb://localhost/books', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

// mongoose.connection.once('connected', () => console.log('connected mongod'));

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));



// // create a variable that points to the models folder
// const path = require('path')
// const fs = require('fs')
// var models_path = path.join(__dirname, '../models');
// // read all of the files in the models_path and require (run) each of the javascript files
// fs.readdirSync(models_path).forEach(function(file) {
//   if(file.indexOf('.js') >= 0) {
//     // require the file (this runs the model file which registers the schema)
//     require(models_path + '/' + file);
//    }
// });