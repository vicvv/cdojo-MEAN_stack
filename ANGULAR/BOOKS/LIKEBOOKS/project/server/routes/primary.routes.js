const router = require('express').Router();
const { PrimeController } = require('../controllers');
// const PrimeController = require('../controllers').PrimeController;
// const PrimeController = require('../controllers/book.controller');

// /books/lakdsjfhksadjf

module.exports = router
  .get('/', PrimeController.index)
  .post('/', PrimeController.create)
  .get('/:prime_id', PrimeController.show)
  .put('/:prime_id', PrimeController.update)
  .delete('/:prime_id', PrimeController.destroy);
