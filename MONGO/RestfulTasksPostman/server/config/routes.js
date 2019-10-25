//app = require('./server/config/mongoose.js');
const controller = require('../controllers/mainController.js');

module.exports = function (app){

// home route
  app.get('/tasks', (req, res) => {
      return controller.showall(req, res);
    });
  app.get('/tasks/:id', (req,res) =>{
    return controller.showone(req,res);
  });

  app.post('/tasks', (req, res) =>{
      return controller.newtask(req, res)
  });

  app.put('/task/:id', (req, res) =>{
    return contrloller.updatetask(req,res);
  });

  app.delete('/task/:id',(req, res) =>{
    return controller.deletetask(req, res);
  })

};