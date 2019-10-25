const Primary = require('mongoose').model('Primary');
const { Http } = require('@status/codes');
//const { Http } = require('http-status-codes');
// const Author = require('mongoose').model('Primary');


module.exports = {
  // get all resource
  index(_request, response) {
    Primary.find({})
      .then(datas => response.json({datas:datas}))
      .catch(error => response.json(error));
  },
  // create resource
  create(request, response) {
    console.log("I am in create and here is my object")
    Primary.create(request.body)
        .then( data =>responce.json({data:data}))
        .catch(errors => {
            console.log("Create Errors", errors);
            responce.json({errors:errors})})
  },
  // get one resource
  show(request, response) {
    //const { _id: dataId } = request.params;
    //console.log('Params in:', request.params.prime_id, { _id: request.params.prime_id});

    Primary.findById(request.params.prime_id)
      .then(data => {
        if (!data) {
          throw new Error('Not Found!');
        }

        response.json(data);
      })
      .catch(error => response.status(Http.Conflict).json(error));
  },
  // update resource
  // update resource
  update(request, response) {
    //const { prime_id: primeId } = request.params;
    console.log('updating p object', request.params._id, request.body);
    Primary.findByIdAndUpdate(request.params._id, request.body, {new: true})
      .then(data => response.json(data))
      .catch(error => {
        // this assumes validation failures which may not be the case.
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        response.status(Http.Unauthorized).json(errors);
      })
  },
  // destroy resource
  destroy: (request, res) => {
    console.log('I am in mongoose controller:', request.params._id)
    Primary.deleteOne({ _id: request.params._id })
    .then( data => {
        //also delete secondary
        console.log("I am in delete...")
        res.json(data)})
    .catch( errors => {
        console.log("Delete Errors: ", errors);
        res.json({error:error});
    });
},
};
