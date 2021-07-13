// save data to server with POST
const postData = async (url = '', data = {}) => {
  await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

// eslint-disable-next-line import/prefer-default-export
export { postData };
