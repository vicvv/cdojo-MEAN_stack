let mongoose = require('mongoose')

let config = require('../config/database.js')

mongoose.connect(config.database, { useNewUrlParser: true });
let db = mongoose.connection;

let Quote = mongoose.model('Quote');

//BS for flash
const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const app = express();

app.use(flash());

// Check connection
db.once('open', function(){console.log('Connected to MongoDB');});   
// Check for DB errors
db.on('error', function(err){ console.log(err);});

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true
  }));


module.exports = {
    index: (req, res) => {
        Quote.find({},(err,data) => {
            if (err){
                console.log(err);
                res.json({error:err, data:data})
            } 
            else{
                res.render('index');
            }

        });
    },

    add: (req,res) => {
        const quote = new Quote(req.body);
        quote.name = req.body.name;
        quote.quote = req.body.quote;
        quote.save()
            //.then(newQuoteData => console.log('quote created: ', newQuoteData))
            .then(() => res.redirect('/result'))         
            .catch(err => {
                console.log("There is an error", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('quote', err.errors[key].message);
                }
                res.redirect('/');
        });
    },

    result: (req,res) => {
        data = Quote.find()
            .then(data => res.render("result", {quotes: data}))
            .catch(err => res.json(err));
    }
};
