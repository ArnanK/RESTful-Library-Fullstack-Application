const { Router } = require('express');
const user = require('../api/user');

const router = Router();

module.exports = () => {
  router.get('/myaccount', (req, res) => {
    //check if loggedin, else redirect to login.
    if(req.isAuthenticated()){
      res.render('pages/myaccount', {
          page: 'myaccount-pages',
          title: 'My Account',
          stylesheet: 'account.css',
      });
    }
    else{
      res.redirect('/auth/login');
    }
    
  });

  return router;
};
