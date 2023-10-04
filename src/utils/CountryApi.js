const COUNTRY_URL = 'https://api.ipgeolocation.io/ipgeo?apiKey=0a241483fc9a4932ba0e479c63e150a4';

function getJson(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getCountry = () => {
  return fetch(`${COUNTRY_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(getJson);
};