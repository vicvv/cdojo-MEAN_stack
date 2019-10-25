// create a variable that points to the models folder
const path = require('path');
  fs = require('fs');
  express = require('express');
  bodyParser = require('body-parser');
  session = require('express-session');
  cookieParser = require('cookie-parser');
  flash = require('express-flash');

// init App
const app = express();

app.use(cookieParser('secret'));
app.use(session({secret: 'keyboard cat',resave: true, saveUninitialized: true, }));
app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Load View Engine and static
app.set('views', path.join(__dirname, '../../client/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../../client/static')));

app.use(require('connect-flash')());

app.use((req, res, next)  => {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


var models_path = path.join(__dirname, '../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
   }
})

module.exports = app;