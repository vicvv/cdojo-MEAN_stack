let mongoose = require('mongoose')
let config = require('../config/database.js')
mongoose.connect(config.database, { useNewUrlParser: true ,useUnifiedTopology: true});
let db = mongoose.connection;


// modify this to your model
let Pet = mongoose.model('Pet');

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
    secret: 'keyboardkitten',
    resave: false,
    saveUninitialized: true
}));

module.exports = {
    index: (req, res) =>{
        Pet.find({}, (err, data) => {
            //console.log("Data",data)
            if(err){
                console.log(err)
                res.json({error:err, data:data});
            } else {
                //console.log(data);
                //res.json({error:err, data:data});
                res.render('index',{pets:data});
            }
        });      
    },
   
    newpet: (req, res) => {
        const NewPet =   new Pet(req.body);
        NewPet.save()
            .then(() => {
                res.redirect ('/');
            })
            .catch(err => {
                console.log('Errors',err);
                
                for (var key in err.errors) {
                    req.flash('newpet', err.errors[key].message);
                }
                res.redirect('/');
            });              
    },

    editpet: (req, res) => {
        console.log("ID, I am in editpet",req.params.id);
        //var id = "5d7807c2189ef631619b6056";
        //var id = req.params.id;
        let query = {_id:req.params.id};
        Pet.findById(query, (err, data) => {
            console.log("pet data",data);
            res.render('editpet', {pet:data});
        });
    },

    updatepat: (req, res) => {
        console.log("ID I am in update Pat page",req.params.id);
        let query = {_id:req.params.id};

        Pet.update(query,req.body)
            .then(() => {
                res.redirect ('/');
            })
            .catch(err => {
                console.log('Errors',err);
                
                for (var key in err.errors) {
                    req.flash('updatepat', err.errors[key].message);
                }
                res.redirect('/');
        });    

    },


    viewpet: (req, res) => {
        Pet.findById(req.params.id, function(err, pet){
            res.render('viewpet', {pet:pet});
        });
    },

    delete: (req, res) => {
        console.log("ID I am in delete Pat page",req.params.id);
        let query = {_id:req.params.id};
        Pet.findOneAndRemove(query)
            .then(() => {
                res.redirect ('/');
            })
            .catch(err => {
                console.log('Errors',err);
                
                for (var key in err.errors) {
                    req.flash('remove', err.errors[key].message);
                }
                res.redirect('/');
        });    
    },


    // logout: (req, res) => {
    //     req.session.name ='';
    //     req.flash('success', 'You are logged out');
    //     res.redirect('/users/login');
    // },
};