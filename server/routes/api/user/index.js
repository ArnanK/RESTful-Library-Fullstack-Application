const { Router } = require('express');
const UserService = require('../../../services/UserService');

const router = Router();

module.exports = () => {
  router.post('/', async (req, res, next) => {
    try {
      await UserService.addItem(
        req.user.id,
        req.body.bookTitle,
        req.body.bookAuthor,
        req.body.bookISBN,
        req.body.bookThumbnail
      );
      return res.status(201).json({ status: 'created' });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
