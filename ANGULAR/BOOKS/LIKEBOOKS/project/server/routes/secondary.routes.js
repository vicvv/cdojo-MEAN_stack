const router = require('express').Router();
const { SecController } = require('../controllers');
// const SecController = require('../controllers').SecController;
// const SecController = require('../controllers/book.controller');

// /books/lakdsjfhksadjf

module.exports = router
  .get('/', SecController.index)
  .post('/', SecController.create)
  .get('/:prime_id', SecController.show)
  .put('/:prime_id', SecController.update)
  .delete('/:prime_id', SecController.destroy);
