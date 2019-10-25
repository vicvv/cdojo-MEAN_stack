const router = require('express').Router();
const path = require('path');

module.exports = router.all('*', (_request, response) => {
  response.sendFile(path.resolve('dist/angular/index.html'));
});
