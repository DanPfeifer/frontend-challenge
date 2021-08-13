async function postData(url = '', data = {}) {
    const token = 'dde70fd6-b600-43cd-b1d9-33250337b31a';
    data.token = token;

    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json(); 
  }

  export default postData;