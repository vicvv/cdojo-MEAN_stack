let mongoose = require('mongoose')
let config = require('../config/database.js')
mongoose.connect(config.database, { useNewUrlParser: true ,useUnifiedTopology: true});
let db = mongoose.connection;


// modify this to your model
let User = mongoose.model('User');

// Check connection
db.once('open', function(){console.log('Connected to MongoDB');});   
db.on('error', function(err){ console.log(err);});


module.exports = {

    users: (req, res) => {
        User.find({})
        .then( users => {
            res.json({users:users});
        })
        .catch( error => {
            console.log("Error: ", error);
            res.json({error:error});
        });
    },

    findUser: (req, res) => {
        User.findOne({ _id: req.params.id })
        .then( user => res.json({user:user}))
        .catch( error => res.json({error:error}));
    },

    newUser: (req, res) => {
        //var person = new User({name: req.body.name});
        var person = new User({});
        console.log("I am in new user", person)
        person.save()
            .then( user => res.json({user:user}))
            .catch( error => res.json({error:error}));
        },

    editUser: (req, res) =>{
        console.log("parameters", req.body)
        User.findByIdAndUpdate(req.params.id,{gold:req.body.gold, $push:{log:req.body.log}})
        .then(user => res.json({user:user}))
        .catch(err => res.json({err:err}));
    },
        // console.log(User.model.name)
        // User.update(req.params.id)
        //     .then(user => res.json({user:user}))
        //     .catch(err => res.json({error:error}));
    // },

    deleteUser: (req, res) => {
        User.deleteOne({ _id:req.params.id })
        .then( user => res.json({user:user}))
        .catch( error => {
            console.log("One Error: ", error);
            res.json({error:error});
        });
    },
}