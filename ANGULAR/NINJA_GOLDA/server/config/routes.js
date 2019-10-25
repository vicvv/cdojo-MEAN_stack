const express = require('express');
const controller = require('../controllers/mainController.js');


module.exports = function (app){

  app.get("/users", controller.users)

  app.get("/users/new/:name", controller.newUser)

  app.get("/users/:id", controller.findUser)

  app.put("/users/edit/:id", controller.editUser)

  //app.put("/users/:id", controller.deleteUser)
  
}