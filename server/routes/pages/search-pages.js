const { Router } = require('express');
const searchGoogleBooks = require('../../utils/searchGoogleBooks');

const router = Router();

module.exports = () => {
  router.get('/search', async (req, res) => {
    const { query } = req.query;
    const result = await searchGoogleBooks(query);
    res.render('pages/search-pages', {
      page: 'search-pages',
      stylesheet: 'search.css',
      title: 'Search',
      books: result,
    });
  });
  return router;
};
