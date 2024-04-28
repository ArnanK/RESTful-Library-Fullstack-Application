const UserModel = require('../models/UserModel');
const PasswordResetModel = require('../models/ResetTokenModel');
const ResetTokenModel = require('../models/ResetTokenModel');

/**
 * Provides methods to fetch and manipulate users and password tokens
 */
class UserService {
  /**
   * Finds and returns a user by email address
   *
   * @param {*} email
   * @returns database result
   */
  static async findByEmail(email) {
    // throw new Error('Not implemented');
    return UserModel.findOne({ email }).exec();
  }

  /**
   * Finds and returns a user by username
   *
   * @param {*} username
   * @returns database result
   */
  static async findByUsername(username) {
    // throw new Error('Not implemented');
    return UserModel.findOne({ username }).exec();
  }

  /**
   * Creates a new user
   *
   * @param {*} username
   * @param {*} email
   * @param {*} password
   * @returns save result
   */
  static async createUser(username, email, password) {
    // throw new Error('Not implemented');
    const user = new UserModel();
    user.email = email;
    user.password = password;
    user.username = username;
    const savedUser = await user.save();
    return savedUser;
  }

  /**
   * Creates a new password reset token
   *
   * @param {*} userId
   * @returns the created token
   */
  static async createPasswordResetToken(userId) {
    // throw new Error('Not implemented');
    const passwordReset = new PasswordResetModel();
    passwordReset.userId = userId;
    const savedToken = await passwordReset.save();
    return savedToken.token;
  }

  /**
   *
   * @param {*} userId
   * @param {*} token
   * @returns the token object if found
   */
  static async verifyPasswordResetToken(userId, token) {
    // throw new Error('Not implemented');
    return PasswordResetModel.findOne({
      token,
      userId,
    }).exec();
  }

  /**
   * Deletes a password reset token
   * @param {*} token
   * @returns
   */
  static async deletePasswordResetToken(token) {
    // throw new Error('Not implemented');
    return PasswordResetModel.findOneAndDelete({
      token,
    }).exec();
  }

  /**
   * Changes a user's password
   * @param {*} userId
   * @param {*} password
   */
  static async changePassword(userId, password) {
    // throw new Error('Not implemented');
    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    user.password = password;
    return user.save();
  }

  // Helpers

  /**
   * Finds a user by id
   * @param {*} id
   * @returns a user
   */
  static async findById(id) {
    return UserModel.findById(id).exec();
  }

  /**
   * returns the password reset token for a user
   * @param {*} id
   * @returns a user
   */
  static async getResetToken(userId) {
    return ResetTokenModel.findOne({ userId }).exec();
  }

  /**
   * Get all users
   *
   * @returns a list of users
   */
  static async getList() {
    return UserModel.find().sort({ createdAt: -1 }).exec();
  }

  /**
   * Deletes a user
   *
   * @returns result
   */
  static async deleteUser(id) {
    return UserModel.findByIdAndDelete(id);
  }

  /**
   * Adds book into Favorite section for user.
   * @param {*} userId
   * @param {*} bookTitle
   * @param {*} bookAuthor
   * @param {*} bookISBN
   * @param {*} bookThumbnail
   * @returns
   */
  static async addBook(userId, bookTitle, bookAuthor, bookISBN, bookThumbnail) {
    const user = await UserModel.findById(userId);

    try {
      await this.checkDuplicate(user.favorites, bookISBN);
      user.favorites.push({ bookTitle, bookAuthor, bookISBN, bookThumbnail });
      await user.save();
      return user;
    } catch (error) {
      // catches errors
      console.log(error);
      return user;
    }
  }

  // throw err if duplicate
  static async checkDuplicate(favoritesList, bookISBN) {
    favoritesList.forEach((book) => {
      if (book.bookISBN === bookISBN) {
        throw new Error('Duplicate');
      }
    });
  }

  /**
   * The function `removeBook` removes a book from a user's favorites list based on the book's ISBN.
   * @param userId - The `userId` parameter is the unique identifier of the user whose favorite book
   * needs to be removed.
   * @param bookISBN - The `bookISBN` parameter in the `removeBook` function is the unique identifier for
   * the book that you want to remove from the user's favorites list.
   * @returns The `removeBook` function is returning the updated `user` object after removing the book
   * with the specified `bookISBN` from the user's favorites list.
   */
  static async removeBook(userId, bookISBN) {
    const user = await UserModel.findById(userId);
    user.favorites.forEach((book) => {
      if (book.bookISBN == bookISBN) {
        const bookIndex = user.favorites.indexOf(book);
        user.favorites.splice(bookIndex, 1);
        return user.save();
      }
    });
    return user;
  }
}

module.exports = UserService;
