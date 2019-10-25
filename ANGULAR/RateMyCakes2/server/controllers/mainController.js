let mongoose = require('mongoose')
let config = require('../config/database.js')
mongoose.connect(config.database, { useNewUrlParser: true ,useUnifiedTopology: true});
let db = mongoose.connection;


// Check connection
db.once('open', function(){console.log('Connected to MongoDB');});   
db.on('error', function(err){ console.log(err);});

//const {Cakes, Comments} = require('../models');
let Cakes = mongoose.model('Cakes');
let Comments = mongoose.model('Comments');


// const Comments = require('./models');

module.exports = {
    allCakes: (req, res)=>{
        Cakes.find({})
        .then(data=>console.log("List all cakes")|| res.json({cakes:data}))
        .catch(errs=>console.log("Errors listing all cakes")|| res.json(errs))
    },
    createCake: (req, res)=>{
        Cakes.create(req.body)
        .then(data=>console.log("Succesfully created cake")|| res.json(data))
        .catch(errs=>console.log("Errors creating cake")|| res.json(errs))
    },
    showCake: (req, res)=>{
        Cakes.findById({_id: req.params.id})
        .then(data=>console.log("Succesfully find a cake")|| res.json(data))
        .catch(errs=>console.log("Errors finding a cake")|| res.json(errs))
    },
    createComment: (req, res)=>{
        Comments.create(req.body)
        .then(data=>{
            Cakes.findOneAndUpdate({_id:req.params.id}, {$push : {comment: data}})
                .then(data =>console.log("Added comment to a cake succesfully")|| res.json(data))
                .catch(data=>console.log("Errors adding comment")|| res.json(data))
        })
        .catch(errs=>console.log("Error creating a comment")|| res.json(errs))
    }
}




// module.exports = {

//     alltasks: (req, res) => {
//         Task.find({})
//         .then( tasks => {
//             res.json({data:tasks});
//         })
//         .catch( error => {
//             console.log("Error: ", error);
//             res.json({error:error});
//         });
//     },

//     onetaks: (req, res) => {
//         Task.findOne({ _id: req.params.id })
//         .then( tasks => res.json({tasks:tasks}))
//         .catch( error => res.json(error));
//     },

//     createnew: (req, res) => {
//         Task.create(req.body)
//         .then( task =>res.json(task))
//         .catch( error => res.json(error));
//     },


//     update: (req, res) =>{
//         console.log("parameters", req.body)
//       Task.findByIdAndUpdate(req.params.id,req.body)
//         .then(task => res.json({task:task}))
//         .catch(err => res.json({err:err}));
//     },


//     delete: (req, res) => {
//         Task.deleteOne({ _id:req.params.id })
//         .then( task => res.json({task:task}))
//         .catch( error => {
//             console.log("One Error: ", error);
//             res.json({error:error});
//         });
//     },

// }