const { Router } = require('express');

const router = Router();

module.exports = () => {
  router.get('*', (req, res) => {
    res.render('pages/notFound-pages', {
      page: 'notFound-pages',
      stylesheet: '',
      title: 'Not Found',
      auth: false,
    });
  });

  return router;
};
