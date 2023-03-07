function sendEmail() {
  event.preventDefault();
  const name = document.querySelector('#nameId');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');

  const msg = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  const options = {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(msg),
  };

  fetch('http://localhost:3000/api/sendMail', options);
}

function goToSend() {
  event.preventDefault();
  const fieldEmail = document.querySelector('#mail').value;
  const contactMe = document.querySelector(
    'body > div.hero > nav > ul > li:nth-child(4) > a',
  );
  console.log(fieldEmail);
  document.querySelector('#email').value = fieldEmail;
  contactMe.click();
}

function getCV() {
  const options = {
    method: 'Get',
  };

  fetch('http://localhost:3000/api/cv', options)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then((blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'dmytro_khabatilin_cv.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error('Error downloading file:', error);
    });
}
