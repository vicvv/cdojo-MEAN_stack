const Secondary = require('mongoose').model('Secondary');
//const { Http } = require('@status/codes');
const { Http } = require('http-status-codes');
// const Author = require('mongoose').model('Secondary');


module.exports = {
  // get all resource
  index(_request, response) {
    Secondary.find({})
      .then(sdatas => response.json(sdatas))
      .catch(error => response.status(Http.PayloadTooLarge).json(error));
  },
  // create resource
  create(request, response) {
    Secondary.create(request.body)
      .then(sdata => response.status(Http.Created).json(sdata))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);

        response.status(Http.Unauthorized).json(errors);
      })
  },
  // get one resource
  show(request, response) {
    const { sdata_id: sdataId } = request.params;

    Secondary.findById(sdataId)
      .then(sdata => {
        if (!sdata) {
          throw new Error('Not Found!');
        }

        response.json(sdata);
      })
      .catch(error => response.status(Http.Conflict).json(error));
  },
  // update resource
  update(request, response) {
    const { sdata_id: sdataId } = request.params;
    console.log('updating sdata', sdataId, request.body);
    Secondary.findByIdAndUpdate(sdataId, request.body, { new: true, runValidators: true })
      .then(sdata => response.json(sdata))
      .catch(error => {
        // this assumes validation failures which may not be the case.
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);

        response.status(Http.Unauthorized).json(errors);
      })
  },
  // destroy resource
  destroy(request, response) {
    const { sdata_id: sdataId } = request.params;

    Secondary.findByIdAndRemove(sdataId)
      .then(sdata => response.json(sdata))
      .catch(error => response.status(Http.Forbidden).json(error));
  },
};
