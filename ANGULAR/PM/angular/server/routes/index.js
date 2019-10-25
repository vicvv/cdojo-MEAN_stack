const apiRouter = require('express').Router();
const router = require('express').Router();
const productRouter = require('./pm.routes');
// const authorRouter = require('./author.routes');
const catchAll = require('./catch-all.routes');

apiRouter
  // .use('/authors', authorRouter)
  // .use('/reviews', reviewRouter)
  .use('/products', productRouter);


module.exports = router.use('/api', apiRouter).use(catchAll);
