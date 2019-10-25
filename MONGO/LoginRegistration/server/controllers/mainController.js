let mongoose = require('mongoose')
let config = require('../config/database.js')
mongoose.connect(config.database, { useNewUrlParser: true });
let db = mongoose.connection;
const bcrypt = require('bcryptjs');
let User = mongoose.model('User');

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

//route sees below
module.exports = {
    index: (req, res) =>{
        User.find({}, (err, data) => {
            if(err){
                console.log(err)
                res.json({error:err, data:data})
            } else {
                //console.log(data);
                //res.json({error:err, data:data});
                res.render('index');
            }
        });

    },

    // registration
    register: (req, res) => {

        // checking if user exists by finding if the doc already has a email

        User.find({'email': req.body.email}, function(err, data) {
            console.log("Data from find: ", data);
            console.log("Error from find: ", err);
            if (data.length > 0){
             console.log("User exists"); 
                req.flash('registration','You are already registered. Now login'); 
                res.redirect('/users/login');  
            }
        });
        let hashed = bcrypt.hashSync(req.body.password, 10);
        req.body.password = hashed;
        var formInfo = req.body
        // if passwords don't match, newUser.password = ""

        //bcrypt.hash(req.body.password, 10, function(err, hash) {
            // Store hash in database
                const newUser = new User(formInfo);
                newUser.save()
                    .then(() => {
                        res.redirect('/users/login')
                    })
                    .catch(err => {
                    console.log("We have an error!", err);
                    // adjust the code below as needed to create a flash message with the tag and content 
                    for (var key in err.errors) {
                        req.flash('registration', err.errors[key].message);
                    }
                    res.redirect('/');
                });
          //});
        
        // User.create(req.body, (err, data) => {
        //     if(err){
        //         console.log(err)
        //         res.json({error:err, data:data})
        //         res.redirect('/users/register');
        //     } else {
        //         console.log("Success");
        //         res.json(data);
        //     }
        // });
    },


    login: (req, res) =>{

        User.find({'email': req.body.email}, function(err, data) {
            console.log("Data from find: ", data);
            console.log("Error from find: ", err);
            if (data.length > 0){
                console.log("User login",data[0].name);
                // if (data[0].password == req.body.password)
                //     res.render('index');
                
                if(bcrypt.compareSync(req.body.password, data[0].password)){
                    req.session.name = data[0].name;
                    console.log("this is session:", req.session.name);
                    res.render('index',{name:req.session.name});
                }

                else{
                    req.flash('login','Password or email does not match!'); 
                    res.render('/users/login');
                } 
            }
        });
        // res.json('login');
    },

    logout: (req, res) => {
        req.session.name ='';
        req.flash('success', 'You are logged out');
        res.redirect('/users/login');
    }
};