const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const expressValidator = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');

// init App
const app = express();

app.use(cookieParser('secret'));
//app.use(session({cookie: { maxAge: 60000 }},{secret: 'keyboard cat',resave: true, saveUninitialized: true, }));

app.use(session({secret: 'keyboard cat',resave: true, saveUninitialized: true, }));
app.use(flash());

require('./server/config/mongoose.js');

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// Load View Engine and static
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './client/static')));

// Express Session Middleware

// Express Messages Middleware
app.use(require('connect-flash')());

app.use((req, res, next)  => {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

require('./server/routes/pets.js')(app);

// Start Server
app.listen(8000, function(){console.log('Server started on port 8000...');});

