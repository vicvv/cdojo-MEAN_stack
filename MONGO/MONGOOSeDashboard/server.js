const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const flash = require('connect-flash');
const session = require('express-session');
const config = require('./config/database');



mongoose.connect(config.database,{ useNewUrlParser: true });
let db = mongoose.connection;

// Check connection
db.once('open', function(){
    console.log('Connected to MongoDB');
  });
   
  // Check for DB errors
  db.on('error', function(err){
    console.log(err);
  });

// init App
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


// Bring in Models
let Animal = require('./models/animal');

// Home Route
// Home Route
app.get('/', function(req, res){
    Animal.find({}, function(err, animals){
      if(err){
        console.log(err);
      } else {
        res.render('index', {
          title:'Animals',
          animals: animals
        });
      }
    });
  });

//Route Files
let articles = require('./routes/animals');
app.use('/animals', articles);

app.listen(3000, function(){
    console.log('Server started on port 3000...');
});