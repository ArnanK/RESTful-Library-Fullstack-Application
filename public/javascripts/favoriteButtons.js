// eslint-disable-next-line no-undef
const buttons = document.querySelectorAll('.btn.favorites');

buttons.forEach((button) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    const form = event.target.closest('form');
    if (form) {
      const formData = {};
      // eslint-disable-next-line no-undef
      const formEntries = new FormData(form).entries();
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of formEntries) {
        formData[key] = value;
      }
      // eslint-disable-next-line no-undef
      await fetch(form.action, {
        method: form.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.ok) {
            console.log('Request successfully handled');
          } else {
            console.log('Failed to handle request');
          }
        })
        .catch((err) => {
          console.error('Error Submitting form: ', err);
        });
    }
  });
});
