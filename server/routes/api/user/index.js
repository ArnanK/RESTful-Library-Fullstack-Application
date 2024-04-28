const { Router } = require('express');
const UserService = require('../../../services/UserService');

const router = Router();

module.exports = () => {
  router.post('/add-to-favorites', async (req, res, next) => {
    try {
      await UserService.addBook(
        req.user.id,
        req.body.bookTitle,
        req.body.bookAuthor,
        req.body.bookISBN,
        req.body.bookThumbnail
      );
      return res.redirect('/home');
    } catch (err) {
      return next(err);
    }
  });

  router.post('/remove-from-favorites', async (req, res, next) => {
    console.log(req.body.bookISBN);
    try {
      await UserService.removeBook(req.user.id, req.body.bookISBN);
      return res.redirect('/myaccount');
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
