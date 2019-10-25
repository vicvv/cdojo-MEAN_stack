const apiRouter = require('express').Router();
const router = require('express').Router();
const primeRouter = require('./primary.routes');
const secRouter = require('./secondary.routes');
// const authorRouter = require('./author.routes');
const catchAll = require('./catch-all.routes');

apiRouter
  // .use('/authors', authorRouter)
  // .use('/reviews', reviewRouter)
  .use('/primes', primeRouter)
  .use('/sec', secRouter)

// /api/books/aksdjafhkajsdfh
module.exports = router.use('/api', apiRouter).use(catchAll);
