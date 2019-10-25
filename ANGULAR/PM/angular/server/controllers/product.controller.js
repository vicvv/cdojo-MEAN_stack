const Product = require('mongoose').model('Product');
const { Http } = require('@status/codes');
// const Author = require('mongoose').model('Product');


module.exports = {
  // get all resource
  index(_request, response) {
    Product.find({})
      .then(products => response.json(products))
      .catch(error => response.status(Http.PayloadTooLarge).json(error));
  },
  // // create resource
  create(request, response) {
    console.log('I am in create new product', request.body)
    Product.create(request.body)
      .then(product => response.status(Http.Created).json(product))
      // .then(res => res.text())          // convert to plain text
      // .then(text => console.log(text))  // then log it out
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        console.log('errrors from create one', errors)
        response.status(Http.Unauthorized).json(errors);
      })
  },

//   create: (req, res) => {
//     Product.create(req.body)
//     .then( task =>res.json(task))
//     .catch( error => res.json(error));
// },

  // get one resource
  show(request, response) {
    const { product_id: productId } = request.params;

    Product.findById(productId)
      .then(product => {
        if (!product) {
          throw new Error('Not Found!');
        }

        response.json(product);
      })
      .catch(error => response.status(Http.Conflict).json(error));
  },
  // update resource
  update(request, response) {
    console.log('product to update ', request.body)
    const { product_id: productId } = request.params;
    console.log('updating product', productId, request.body);
    Product.findByIdAndUpdate(productId, request.body, { new: true, runValidators: true })
      .then(product => response.json(product))
      .catch(error => {
        // this assumes validation failures which may not be the case.
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        response.status(Http.Unauthorized).json(errors);
      })
  },
  // destroy resource
  destroy(request, response) {
    console.log('I am in destroy method in server controller', request.body)
    const { product_id: productId } = request.params;

    Product.findByIdAndRemove(productId)
      .then(product => {console.log('did I dleteit??', product); response.json(product) })
      .catch(error => response.status(Http.Forbidden).json(error));
  },
};
