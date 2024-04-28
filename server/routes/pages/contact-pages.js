const { Router } = require('express');

const router = Router();

module.exports = () => {
  router.get('/contact', (req, res) => {
    res.render('pages/contact-pages', {
      page: 'contact-pages',
      stylesheet: 'login.css',
      title: 'Recipes-Contact',
      auth: false,
    });
  });

  return router;
};
