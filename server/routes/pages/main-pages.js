const { Router } = require('express');

const router = Router();

module.exports = () => {
  router.get('/home', (req, res) => {
    res.render('pages/main-pages', {
      page: 'main-pages',
      stylesheet: 'home.css',
      title: 'Recipes-Home',
    });
  });

  return router;
};
