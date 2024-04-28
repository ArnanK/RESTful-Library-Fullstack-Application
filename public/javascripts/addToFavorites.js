// eslint-disable-next-line no-undef
const buttons = document.querySelectorAll('.btn.add-to-favorites');

buttons.forEach((button) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    const form = event.target.closest('form');
    if (form) {
      const formData = {
        bookTitle: form.querySelector('input[name="bookTitle"]').value,
        bookAuthor: form.querySelector('input[name="bookAuthor"]').value,
        bookISBN: form.querySelector('input[name="bookISBN"]').value,
        bookThumbnail: form.querySelector('input[name="bookThumbnail"]').value,
      };
      // eslint-disable-next-line no-undef
      await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.ok) {
            console.log('Book successfully added to favorites');
          } else {
            console.log('Failed to add book to favorites');
          }
        })
        .catch((err) => {
          console.error('Error Submitting form: ', err);
        });
    }
  });
});
