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
      let bookISBN = 'No ISBN Given'
      if (book?.volumeInfo?.industryIdentifiers && book.volumeInfo.industryIdentifiers.length > 0) {
        bookISBN = book.volumeInfo.industryIdentifiers[0].identifier;
      }
      const bookInfo = {
          "bookTitle": book?.volumeInfo?.title ?? 'No Title Given',
          "bookAuthor": book?.volumeInfo?.authors ?? 'No Author Given',
          "bookISBN": bookISBN,
          "bookThumbnail": book?.volumeInfo?.imageLinks?.smallThumbnail ?? 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjgyLTI0NS1wLnBuZw.png',
      };
      if (bookInfo.bookISBN !== 'No ISBN Given') {
        results.push(bookInfo);
      }
    });
  } catch (err) {
    console.log(err);
  }
  return results;
}

module.exports = searchGoogleBooks;
