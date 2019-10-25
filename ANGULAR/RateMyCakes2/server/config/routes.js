const express = require('express');
const controller = require('../controllers/mainController.js');



module.exports = function(app){
  // app.use(bp.urlencoded({extended: true}));
  // app.use(bp.json());
  app.get('/cakes', controller.allCakes);
  app.post('/cakes', controller.createCake);
  app.get('/cakes/:id',controller.showCake);
  app.post('/cakes/comment/:id',controller.createComment);
  return app;
}

// module.exports = function (app){

// // home route
// app.get('/tasks', (req, res) => {
//     controller.alltasks(req, res);
//   });

// app.get('/tasks/:id', (req, res) => {
//   controller.onetaks(req, res);
// });

// app.post('/tasks', (req, res) => {
//   controller.createnew(req, res);
// });

// app.put('/tasks/:id', (req, res) => {
//   controller.update(req, res);
// });

// app.delete('/tasks/:id', (req, res) => {
//   controller.delete(req, res);
// });
  
// }