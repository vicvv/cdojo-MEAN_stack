const express = require('express');
const router = express.Router();

// animal Model
let Animal = require('../models/animal');


// Add Route
router.get('/add',  function(req, res){
  res.render('add_animal', {
    title:'Add animal'
  });
});

// Add Submit POST Route
router.post('/add', function(req, res){

  // Get Errors
  //let errors = req.validationErrors();
  var errors = '';
  if(errors){
    res.render('add_animal', {
      name:'Add animal',
      errors:errors
    });
  } else {
    let animal = new Animal();
    animal.name = req.body.name;
    animal.color = req.body.color;
    animal.favfood = req.body.favfood;
    animal.origin = req.body.origin;

    animal.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
        req.flash('success','animal Added');
        res.redirect('/');
      }
    });
  }
});

// Load Edit Form
router.get('/edit/:id',  function(req, res){
  Animal.findById(req.params.id, function(err, animal){
   
    res.render('edit_animal', {
      title:'Edit animal',
      animal:animal
    });
  });
});

// Update Submit POST Route
router.post('/edit/:id', function(req, res){
  let animal = {};
  
    animal.name = req.body.name;
    animal.color = req.body.color;
    animal.favfood = req.body.favfood;
    animal.origin = req.body.origin;

  let query = {_id:req.params.id}

  Animal.update(query, animal, function(err){
    if(err){
      console.log(err);
      return;
    } else {
      req.flash('success', 'animal Updated');
      res.redirect('/');
    }
  });
});

// Delete animal
router.delete('/:id', function(req, res){  
  let query = {_id:req.params.id}
  Animal.findById(req.params.id, function(err, animal){
      animal.remove(query, function(err){
        if(err){
          console.log(err);
        }
        res.send('Success');
      });
  });
});

// Get Single animal
router.get('/:id', function(req, res){
  Animal.findById(req.params.id, function(err, animal){
      res.render('animal', {
        animal:animal,
      });
  });
});

module.exports = router;
