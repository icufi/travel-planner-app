/* eslint-disable linebreak-style */
import './countriesList';
import { updateUI } from './updateUI';
import { postData } from './postData';
import getCoords from './getCoords';
import { countdown } from './countdown';

/* Global Variables */
const geoAPIKey = '&maxRows=1&username=icufishmg';
const geoBaseURL = 'http://api.geonames.org/searchJSON?q=';
export const weatherbitAPIKey = '&key=1d235b160c6c4917b499388daca9bc82';
export const weatherbitBaseURL = 'https://api.weatherbit.io/v2.0/normals?';
const pixabayAPIKey = 'key=22010688-d7e3c3ffcac39b9c48e1a3a8d';
const pixabayBaseURL = 'https://pixabay.com/api/?';

// Create a new date instance dynamically
const d = new Date();

// eslint-disable-next-line no-shadow
async function imageCall(pixabayAPIKey, pixabayBaseURL, city, textCountry) {
  const res = await fetch(
    `${pixabayBaseURL}${pixabayAPIKey}&q=${city}&category=places&image_type=photo`,
  );
  try {
    const cityImg = await res.json();
    if (cityImg.total === 0) {
      const resBackup = await fetch(
        `${pixabayBaseURL}${pixabayAPIKey}&q=${textCountry}&image_type=photo`,
      );
      const countryIMG = await resBackup.json();
      document.getElementById('cityImage').src = countryIMG.hits[0].webformatURL;
      document.getElementById('cityImage').alt = countryIMG.hits[0].tags;
    } else {
      document.getElementById('cityImage').src = cityImg.hits[0].webformatURL;
      document.getElementById('cityImage').alt = cityImg.hits[0].tags;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error, 'error');
  }
}

// event listener that initiates api call;
// eslint-disable-next-line no-use-before-define
document.getElementById('generate').addEventListener('click', performAction);



// callback function called by event listener
function performAction() {
  const dateT = document.getElementById('dateField').value;
  const travelDate = [dateT.slice(-5), dateT.slice(0, 4)].join('-');
  const travelDur = [dateT.slice(-5)].join('-');
  const city = document.getElementById('city').value.trim();
  const listCountry = document.getElementById('country');
  const destCountry = listCountry.options[listCountry.selectedIndex].value;
  const textCountry = listCountry.options[listCountry.selectedIndex].text;
  const checkDate = new Date(travelDate).getTime();
  console.log(checkDate);
  const countdownDate = countdown(checkDate);

  // api call chained with server.js call and UI update of data from api and user
  getCoords(geoBaseURL, city, geoAPIKey, travelDur, destCountry).then(
    (appData) => {
      postData('/travelinfo', {
        city: appData.geonames[0].name,
        country: appData.geonames[0].countryName,
        highTemp: appData.data[0].max_temp,
        precip: appData.data[0].precip,
        minTemp: appData.data[0].min_temp,
        travelDate,
        daysCountdown: countdownDate,
      })
        .then(imageCall(pixabayAPIKey, pixabayBaseURL, city, textCountry))
        .then(updateUI());
    },
  );
}

// eslint-disable-next-line import/prefer-default-export
export { performAction };

