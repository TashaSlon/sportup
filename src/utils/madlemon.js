const URL = 'http://madlemon.ru:8090/site/auth';

function getJson(res) {
  if (res.ok) {
    console.log(res.json());
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const checkUser = () => {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( {"authToken":"lJm1gNQ02CK1Eq-h8doNyI63RBkjvJO48EK8jiNz0gS577aLlGyC3NoU1xG0VT5v61PpGs4GalrxWJB8YVK7uLoD2bx8y8_ewEUovQJ17lvCvoiQp2bQiq6QRmfeWqRaPS5gtHDZmy5c29JYN2qXAhP0TmNklNnCmbrbfjsjauaWwP1tnqZ4hun6HMKM0pXBTyP9uc96OebHhvX98PFOelIzks1EcyhAsOR6BeQJKymDLsAueGuFip0YXBFxOWuZT_kDgx771i41Dmpq26sXr2kCUPtKD_kmUUTZ1Tt2AU0JC9V_-lkRwNopJ-QYknyu_599GqrFB0JoFQ7DeWILJ_TPY4YSV2oR9fqp_QmurxY5brofOCVkgeiYn_XtwIpY7-b45gtXZyk63l6WTylcypAuFWUYmQV-qYSjazi-szY"})
  })
  .then(getJson);
};