const axios = require('axios');

require('dotenv').config();

async function searchGoogleBooks(query) {
  const options = {
    method: 'GET',
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    params: {
      q: query,
      app_key: process.env.APP_KEY,
    },
  };
  const results = [];

  try {
    const response = await axios.request(options);
    const data = await response.data;
    const books = data.items;
    books.forEach((book) => {
      const bookInfo = {
          "bookTitle": book.volumeInfo.title ?? 'No Title Given',
          "bookAuthor": book.volumeInfo.authors ?? 'No Author Given',
          "bookISBN": book.volumeInfo.industryIdentifiers[0].identifier ?? 'No ISBN Given',
          "bookThumbnail": book.volumeInfo.imageLinks.smallThumbnail,
      };
      results.push(bookInfo);
    });
  } catch (err) {
    console.log(err);
  }
  return results;
}

module.exports = searchGoogleBooks;
