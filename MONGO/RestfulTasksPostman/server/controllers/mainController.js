let mongoose = require('mongoose');
let config = require('../config/database.js');
mongoose.connect(config.database, { useNewUrlParser: true ,useUnifiedTopology: true});
let db = mongoose.connection;

// modify this to your model
let Task = mongoose.model('Task');
// Check connection
db.once('open', function(){console.log('Connected to MongoDB');});   
// Check for DB errors
db.on('error', function(err){ console.log(err);});


module.exports = {

    showall:(req, res) =>{
        Task.find({})
        .then (tasks => res.json({tasks:tasks}))
        .catch(errors => res.json({errors:errors}))
    },

    showone:(req,res) =>{
        Task.findOne({_id: req.param.id})
        .then (tasks => res.json({tasks:tasks}))
        .catch (errors =>res.json({errors:errors}))
    },

    newtask: function(req, res){
        Task.create(
            { title: req.body.title, 
              description: req.body.description, 
              completed: req.body.completed}, 
            function(err, task){
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    res.json({message: "Success!", added: true});
                }
        })
    },
    
    updatetask:(req, res) =>{
        Task.update({_id:req.param.id})
        .then(tasks => res.json({tasks:tasks}))
        .catch(errors => res.json({errors:errors}))
    },

    deletetask:(req,res) =>{
        Task.deleteOne({_id:req.param.id})
        .then(tasks =>res.json({tasks:tasks}))
        .catch(errors => res.json({errors:errors}))
    }

    // logout: (req, res) => {
    //     req.session.name ='';
    //     req.flash('success', 'You are logged out');
    //     res.redirect('/tasks/login');
    // }
};