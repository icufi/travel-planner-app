/* eslint-disable import/no-cycle */
import { weatherbitBaseURL, weatherbitAPIKey } from './app';

// api call function
export default async function getCoords(
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
