const { Router } = require('express');

const router = Router();

module.exports = () => {
  router.get('/favorites', (req, res) => {
    res.render('pages/favorites-pages', {
      page: 'favorites-pages',
      stylesheet: 'favorites.css',
      title: 'Recipes-Favorites',
    });
  });

  return router;
};
