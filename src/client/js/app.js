// imported functions
/* eslint-disable linebreak-style */
import './countriesList';
import { updateUI } from './updateUI';
import { postData } from './postData';
import { countdown } from './countdown';

/* Global Variables */
const geoAPIKey = '&maxRows=1&username=icufishmg';
const geoBaseURL = 'http://api.geonames.org/searchJSON?q=';
export const weatherbitAPIKey = '&key=1d235b160c6c4917b499388daca9bc82';
export const weatherbitBaseURL = 'https://api.weatherbit.io/v2.0/normals?';
const pixabayAPIKey = 'key=22010688-d7e3c3ffcac39b9c48e1a3a8d';
const pixabayBaseURL = 'https://pixabay.com/api/?';

// geonames api call chained with weatherbit api call
async function getCoords(
  // eslint-disable-next-line no-shadow
  geoBaseURL,
  city,
  // eslint-disable-next-line no-shadow
  geoAPIKey,
  travelDur,
  destCountry,
) {
  const res = await fetch(
    `${geoBaseURL}${city}&country=${destCountry}${geoAPIKey}`,
  );
  try {
    const data = await res.json();
    const weatherRes = await fetch(
      `${weatherbitBaseURL}&lat=${data.geonames[0].lat}&lon=${data.geonames[0].lng}&start_day=${travelDur}&end_day=${travelDur}&tp=daily${weatherbitAPIKey}&units=I`,
    );
    const weatherData = await weatherRes.json();
    const appData = {
      ...data,
      ...weatherData,
    };
    return appData;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error);
    // eslint-disable-next-line no-alert
    alert('That location does not exist.');
  }
}

// pixabay api call funtion
// eslint-disable-next-line no-shadow
async function imageCall(pixabayAPIKey, pixabayBaseURL, city, textCountry) {
  const res = await fetch(
    `${pixabayBaseURL}${pixabayAPIKey}&q=${city}&category=places&image_type=photo`,
  );
  try {
    const cityImg = await res.json();
    // if no images available of city then return image of country
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

// event listener that initiates api calls and date functionality;
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
  const countdownDate = countdown(checkDate);

  // api call chained with server.js post and UI update of data from api and server side memory
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
