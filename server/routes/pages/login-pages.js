const { Router } = require('express');

const router = Router();

module.exports = () => {
  router.get('/login', (req, res) => {
    res.render('pages/login-pages', {
      page: 'login-pages',
      stylesheet: 'main.css',
      title: 'Recipes-Login',
    });
  });
  return router;
};
