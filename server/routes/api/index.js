const { Router } = require('express');

const router = Router();

const userRouter = require('./user');

module.exports = (params) => {

  router.use('/user', userRouter(params));

  return router;
};
