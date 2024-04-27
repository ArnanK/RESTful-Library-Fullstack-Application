const { Router } = require('express');
const mainRouter = require('./main-pages');

const router = Router();

module.exports = (params) => {
  router.use(mainRouter(params));
  return router;
};
