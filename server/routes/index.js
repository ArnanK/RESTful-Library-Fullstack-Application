const { Router } = require('express');
const cors = require('cors');
const authRouter = require('./auth');
const apiRouter = require('./api');
const pagesRouter = require('./pages/index');

const router = Router();

// This module returns a function and this allows you to pass parameters down the routing chain
module.exports = (params) => {
  router.use('/auth', authRouter(params));

  router.use('/', pagesRouter(params));
  // This delegates everything under /auth to the respective routing module.
  // We also pass down the params.
  //router.use('/playground', playgroundRouter(params));

  // Note the CORS middleware here - this is needed as we are calling the APi from a different URL/port
  router.use('/api', cors(), apiRouter(params));

  // Always return the router from such a module.
  return router;
};
