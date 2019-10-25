const router = require('express').Router();
//const { ProductController } = require('../controllers');
// const ProductController = require('../controllers').ProductController;
const ProductController = require('../controllers/product.controller');

// /PMs/lakdsjfhksadjf
console.log('I am in server router')

module.exports = router
  .get('/', ProductController.index)
  .post('/', ProductController.create)
  .get('/:product_id', ProductController.show)
  .put('/:product_id', ProductController.update)
  .delete('/:product_id', ProductController.destroy);
