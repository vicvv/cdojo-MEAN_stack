const express  = require("express");
const app      = express();
const server   = app.listen(8000);
const path = require('path');
const flash    = require('express-flash');

require('./server/config/mongoose.js');
 
// app.use(require("express-session")({
//     secret:"Twhatever",
//     resave: false,
//     saveUninitialized: false
// }));

// 
app.use(flash());

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

require('./server/routes/quotes.js')(app);

