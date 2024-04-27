const { Router } = require('express');

const router = Router();

module.exports = () => {
  router.get('/contact', (req, res) => {
    res.render('pages/contact-pages', {
      page: 'contact-pages',
      stylesheet: 'contact.css',
      title: 'Recipes-Contact',
    });
  });

  return router;
};
