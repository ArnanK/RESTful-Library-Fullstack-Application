const { Router } = require('express');
const UserService = require('../../../services/UserService');

const router = Router();

module.exports = () => {
  router.post('/', async (req, res, next) => {
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


  
  return router;
};
