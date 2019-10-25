const express = require('express');
const controller = require('../controllers/mainController.js');


module.exports = function (app){

// home route
app.get('/tasks', (req, res) => {
    controller.show(req, res);
  });

app.get('/tasks/:id', (req, res) => {
  controller.show_one(req, res);
});

app.post('/tasks', (req, res) => {
  controller.add(req, res);
});

app.put('/tasks/:id', (req, res) => {
  controller.update(req, res);
});

app.delete('/tasks/:id', (req, res) => {
  controller.remove(req, res);
});
  
}