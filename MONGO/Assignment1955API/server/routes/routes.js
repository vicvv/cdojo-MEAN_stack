const express = require('express');
const controller = require('../controllers/mainController.js');
module.exports = function (app){

// home route
app.get('/', (req, res) => {
    // res.render('index');
    controller.show(req, res);
  });

  app.get("/:name", function(req, res) {
    controller.showByName(req,res);
  });

app.get("/new/:name", function(req, res) {
  controller.create(req, res);
  });

app.get("/remove/:name", function(req, res) {
  controller.destroy(req, res);
  });

};