//const express = require('express');

const controller = require('../controllers/mainController.js');
module.exports = function (app){

// home route
app.get('/', (req, res) => {   
    return controller.index(req, res);
  });

// shows one pet on view format
app.get('/pets/:id', (req, res) => {  
  return controller.viewpet(req, res);
});

//displays form for entering a new pet info
app.get('/pets', (req, res) => {  
  res.render('addpet');
});

// post form for entering new pet info
app.post('/pets/new', (req, res) => { 
  return controller.newpet(req, res);
});

// gets pet form db and display for the dit
app.get('/pets/edit/:id', (req, res) => { 
  return controller.editpet(req, res);
});

//post to update the database for one pet
app.post('/pets/:id', (req, res) => {  
  return controller.updatepat(req, res);
});

// delete pet is a get request, not post
app.get('/pets/delete/:id', (req, res) => {
  console.log("I am in delete route")
  return controller.delete(req, res);
});

};