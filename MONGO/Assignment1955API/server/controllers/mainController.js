let mongoose = require('mongoose')
let config = require('../config/database.js')
mongoose.connect(config.database, { useNewUrlParser: true ,useUnifiedTopology: true});
let db = mongoose.connection;


// modify this to your model
let Person = mongoose.model('Person');

//BS for flash
const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const app = express();


// Check connection
db.once('open', function(){console.log('Connected to MongoDB');});   

// Check for DB errors
db.on('error', function(err){ console.log(err);});


module.exports = {

    show: function(req, res) {
        Person.find({}, function(err, people){
            if(err){
                console.log("something went wrong");
                console.log(err);
                res.json(Person.errors);
            }
            else{
                console.log("getting people");
                console.log(people);
                res.json(people);
            }
        })

    },

    showByName: function(req, res) {
        Person.findOne({name: req.params.name}, function(err, person){
            if(err){

                console.log("something went wrong");
                console.log(err);
                res.json(Person.errors);
            }
            else{
                console.log("getting name");
                console.log(req.params.name);
                console.log(person);
                res.json(person);
            }
        })

    },

//localhost:8000/new/Vicky V  <-- creates a name

    create: function(req, res) {

        var person = new Person({name: req.params.name});

        person.save(function(err){
            if(err){
                console.log("something went wrong");
                console.log(err);
                res.json(person.errors);
            }
            else{
                console.log("person created");
                res.redirect("/");
            }
        })
    },


    destroy: function(req, res) {

        Person.remove({name: req.params.name}, function(err){
            if(err){
                console.log("something went wrong");
                console.log(err);
                res.json(Person.errors);
            }
            else{
                console.log("person deleted");
                res.redirect("/");
            }
        })
    },
}