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

    alltasks: (req, res) => {
        Task.find({})
        .then( tasks => {
            res.json({data:tasks});
        })
        .catch( error => {
            console.log("Error: ", error);
            res.json({error:error});
        });
    },

    onetaks: (req, res) => {
        Task.findOne({ _id: req.params.id })
        .then( tasks => res.json({tasks:tasks}))
        .catch( error => res.json(error));
    },

    createnew: (req, res) => {
        Task.create(req.body)
        .then( task =>res.json(task))
        .catch( error => res.json(error));
    },


    update: (req, res) =>{
        console.log("parameters", req.body)
      Task.findByIdAndUpdate(req.params.id,req.body)
        .then(task => res.json({task:task}))
        .catch(err => res.json({err:err}));
    },


    delete: (req, res) => {
        Task.deleteOne({ _id:req.params.id })
        .then( task => res.json({task:task}))
        .catch( error => {
            console.log("One Error: ", error);
            res.json({error:error});
        });
    },

}