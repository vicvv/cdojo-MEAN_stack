let mongoose = require('mongoose')
let config = require('../config/database.js')
mongoose.connect(config.database, { useNewUrlParser: true ,useUnifiedTopology: true});
let db = mongoose.connection;


// modify this to your model
let Task = mongoose.model('Task');

// Check connection
db.once('open', function(){console.log('Connected to MongoDB');});   
db.on('error', function(err){ console.log(err);});


module.exports = {
    show: (req, res) => {
        Task.find({})
        .then( tasks => {
            res.json(tasks);
        })
        .catch( error => {
            console.log("Error: ", error);
            res.json(error);
        });
    },

    show_one: (req, res) => {
        Task.findOne({ _id: req.params.id })
        .then( task => res.json(task))
        .catch( error => res.json(error));
    },

    add: (req, res) => {
        Task.create(req.body)
        .then( task =>res.json(task))
        .catch( error => res.json(error));
    },
    update: (req, res) =>{
      Task.update({_id:req.params.id})
        .then(task => res.json(task))
        .catch(err => res.json(err));
    },
    remove: (req, res) => {
        Task.deleteOne({ _id:req.params.id })
        .then( task => res.json(task))
        .catch( error => {
            console.log("One Error: ", error);
            res.json(error);
        });
    },

}