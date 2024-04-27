const { Router } = require('express');

const router = Router();

module.exports = () => {
  router.get('/about', (req, res) => {
    res.render('pages/about-pages', {
      page: 'about-pages',
      stylesheet: 'about.css',
      title: 'Recipes-About',
      auth: false,
    });
  });

  return router;
};
