let mongoose = require('mongoose')
let config = require('../config/database.js')
mongoose.connect(config.database, { useNewUrlParser: true ,useUnifiedTopology: true});
let db = mongoose.connection;


// Check connection
db.once('open', function(){console.log('Connected to MongoDB');});   
db.on('error', function(err){ console.log(err);});

//const {Cakes, Comments} = require('../models');
let Primary = mongoose.model('Primary');
let Secondary = mongoose.model('Secondary');

module.exports = {

    allPObjects: (req, res) =>{
        Primary.find({})
        .then (data => { res.json({data:data})}  )
        .catch(errors => { 
            console.log("Find all Errors", errors);
            res.json({errors:errors})})
    },

    onePObject: (req, res) =>{
        console.log("I am in get one p object ", req.params.id)
        Primary.findOne({ _id: req.params.id })
        .then( data => res.json({data:data}))
        .catch(errors => { 
            console.log("Find One Errors", errors);
            res.json({errors:errors})})
    },

    createNewP:(req, res) =>{
        console.log("I am in create new", req.body)
        Primary.create(req.body)
        .then( data =>res.json({data:data}))
        .catch(errors => { 
            console.log(" Create Errors", errors);
            res.json({errors:errors})})
    },

    updatePr: (req, res) =>{
        console.log("parameters", req.body)
        Primary.findByIdAndUpdate(req.params.id,req.body)
        .then(data => res.json({data:data}))
        .catch(errors => { 
            console.log("Update Errors", errors);
            res.json({errors:errors})})
    },

    deletePr: (req, res) => {
        Primary.deleteOne({ _id:req.params.id })
        .then( data => {
            //also delete secondary
            res.json({data:data})})
        .catch( errors => {
            console.log("Delete Errors: ", errors);
            res.json({error:error});
        });
    },

    createNewS:(req, res) =>{
        console.log("I am in create new secondary", req.body)
        // console.log("data:", data.primary)
        Secondary.create(req.body)
        .then( data => {
            return Primary.findByIdAndUpdate(data.primary, { $push: { secondary: data.id }})
                .then(() => {
                    res.json({data:data})})
                })
            //update primary here;
        .catch(errors => { 
            console.log(" Create S Errors", errors);
            res.json({errors:errors})})
    },

    updateSc:(req, res) =>{
        console.log("parameters", req.body)
        Secondary.findByIdAndUpdate(req.params.id,req.body)
        .then(data => res.json({data:data}))
        .catch(errors => { 
            console.log("Update S Errors", errors);
            res.json({errors:errors})})
    },  
}

