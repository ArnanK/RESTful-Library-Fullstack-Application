const { Router } = require('express');
const cors = require('cors');
const authRouter = require('./auth');
const apiRouter = require('./api');
const playgroundRouter = require('./playground');
const path = require('path');

const router = Router();

// This module returns a function and this allows you to pass parameters down the routing chain
module.exports = (params) => {

  router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../html', 'home.html'));
  })

  router.get('/favorites', (req, res) => {
    res.sendFile(path.join(__dirname, '../html', 'favorites.html'));
  })

  router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../html', 'contact.html'));
  })

  router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../html', 'about.html'));
  })
  /* GET index page. */
  router.get('/', (req, res) => {
    res.render('index', { page: 'index' });
  });

  router.get('/myaccount', (req, res) => {
    res.render('myaccount', { page: 'myaccount' });
  });

  // This delegates everything under /auth to the respective routing module.
  // We also pass down the params.
  router.use('/auth', authRouter(params));
  router.use('/playground', playgroundRouter(params));

  // Note the CORS middleware here - this is needed as we are calling the APi from a different URL/port
  router.use('/api', cors(), apiRouter(params));

  // Always return the router from such a module.
  return router;
};
