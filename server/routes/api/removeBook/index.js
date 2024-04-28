const { Router } = require('express');
const UserService = require('../../../services/UserService');

const router = Router();

module.exports = () => {
  router.post('/', async (req, res, next) => {
    console.log(req.body.bookISBN);
    try {
      await UserService.removeBook(
        req.user.id,
        req.body.bookISBN,
      );
      return res.redirect('/myaccount');
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
