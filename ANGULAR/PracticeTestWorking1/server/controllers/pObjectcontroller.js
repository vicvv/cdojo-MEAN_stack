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
        .then (data => { 
            //console.log("20",data)
            res.json({data:data})}  )
        .catch(errors => { 
            //console.log("Find all Errors", errors);
            res.json({data:errors})})
    },

    onePObject: (req, res) =>{
        Primary.findOne({ _id: req.params.id })
        .then( data => res.json({data:data}))
        .catch(errors => { 
            console.log("Find One Errors", errors);
            res.json({errors:errors})})
    },

    createNewP:(req, res) =>{
        //console.log("I am in create new", req.body)
        Primary.create(req.body)
        .then( data => res.json({data:data}))
        .catch(err => { 
           // console.log(" Create Errors", err);
            // res.json({data:errors})})
            // setting back end validation
            const error = Object.keys(err.error).map(key => err.error[key].message);
            res.status(402).json(error)
        })
    },

    updatePr: (req, res) =>{
        console.log("parameters", req.body)
        // {new: true} are if we have an @Output
        Primary.findByIdAndUpdate(req.params.id,req.body, { new: true })
        .then(data => res.json(data))
        .catch(errors => { 
            console.log("Update Errors", errors);
            res.json({errors:errors})})
    },

    deletePr: (req, res) => {
        //console.log('I am in mongoose controller:', req.params.id)
        Primary.deleteOne({ _id:req.params.id })
        .then( data => {
            Secondary.remove({primary: req.params.id})
                .then(data =>{
                    res.json({data:data})
                })
                .catch (errors =>{
                    //console.log("64 Delete Errors: ", errors);
                    res.json({error:error});
                })

            res.json({data:data})})
        .catch( errors => {
            //console.log("Delete Errors: ", errors);
            res.json({error:error});
        });
    },

    createNewS:(req, res) =>{
        //console.log("I am in create new secondary", req.body)
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
        console.log("parameters to update sec object", req.body)
        Secondary.findByIdAndUpdate(req.params.id,req.body)
        .then(data => res.json(data))
        .catch(errors => { 
            console.log("Update S Errors", errors);
            res.json({errors:errors})})
    }, 
    
    showAllSc:(req, res) => {
        //console.log("show all S obj by primary id:", req.params.id)
        Secondary.find({primary: req.params.id})
        .then(data => res.json({data:data}))
        .catch(errors => { 
            //console.log("Find S by primary id error", errors);
            res.json({errors:errors})})

    },

    deleteSc: (req, res) => {
        console.log("line 113 I am in delete Sec button", req.params.id )
        Secondary.deleteOne({ _id:req.params.id })
            .then(data => res.json({data:data}))
            .catch(errors => { 
                console.log("Delete secondary  error", errors);
                res.json({errors:errors})})
    },

    
    
}

