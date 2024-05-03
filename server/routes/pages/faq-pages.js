const { Router } = require('express');

const router = Router();

module.exports = () => {
  router.get('/faq', (req, res) => {
    res.render('pages/faq-pages', {
      page: 'faq-pages',
      stylesheet: 'udemyday12.css',
      title: 'Books-faq',
      auth: false,
    });
  });

  return router;
};
