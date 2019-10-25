var controller = require('../controllers/controller.js')
module.exports = function(app){
  app.get('/allobjects', function(req,res){
    controller.allPObjects(req,res);
  })
  app.get('/onep/:id', function(req, res){
    console.log("I am in oget one p object")
    controller.onePObject(req, res);
  })

  app.post('/newp', function(req, res){
    controller.createNewP(req,res);
  })
  
  app.put('/editp/:id', function(req, res){
    controller.updatePr(req,res);
  })

  app.post('/news', function(req, res){
    console.log("hi", req.body);
    controller.createNewS(req,res);
  })

  // i don't include updateSecondary because it depends
  // how you design controller and front-end logic.
  app.delete('/deletep/:id', function(req, res){
    controller.deletePr(req, res);
  })
  app.get('/deletes/:id/:sid', function(req, res){
    controller.deletes(req, res);
  })
}


