/* Global Variables */
const geoAPIKey = "&maxRows=1&username=icufishmg";
const geoBaseURL = "http://api.geonames.org/searchJSON?q=";
const weatherbitAPIKey = "&key=1d235b160c6c4917b499388daca9bc82";
const weatherbitBaseURL = "https://api.weatherbit.io/v2.0/normals?";
const pixabayAPIKey = "key=22010688-d7e3c3ffcac39b9c48e1a3a8d";
const pixabayBaseURL = "https://pixabay.com/api/?";






// event listener that initiates api call;

document.getElementById("generate").addEventListener("click", performAction);

// callback function called by event listener
function performAction(e) {
  const dateT = document.getElementById("dateField").value;
  const travelDate = [dateT.slice(-5), dateT.slice(0,4)].join('-');
  const travelDur = [dateT.slice(-5)].join('-');

  console.log(travelDur);
  const userResponse = document.getElementById("feelings").value;
  const city = document.getElementById("city").value.trim();
  const checkDate = new Date(travelDate).getTime();
  const daysCountdown = Math.round(((checkDate - d.getTime()) / (1000*60*60*24)+1))



  //api call chained with server.js call and UI update of data from api and user
  getCoords(geoBaseURL, city, geoAPIKey, travelDur).then(function (appData) {


    postData("/travelinfo", {
      city: appData.geonames[0].name,
      country: appData.geonames[0].countryName,
      highTemp: appData.data[0].max_temp,
      precip: appData.data[0].precip,
      minTemp: appData.data[0].min_temp,
      travelDate: travelDate,
      daysCountdown: daysCountdown,
    }).then(fetchImg(pixabayAPIKey, pixabayBaseURL, city)).then(updateUI());
  });
}

// Create a new date instance dynamically with JS
let d = new Date();

let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

const fetchImg = async (pixabayAPIKey, pixabayBaseURL, city) => {
  const res = await fetch(`${pixabayBaseURL}${pixabayAPIKey}&q=${city}+city&image_type=photo`);
  console.log(`${pixabayBaseURL}${pixabayAPIKey}&q=${city}+city&image_type=photo`)
  try {
    const cityImg = await res.json();
    console.log(cityImg);
    document.getElementById("cityImage").src=cityImg.hits[0].webformatURL;
    document.getElementById("cityImage").alt=cityImg.hits[0].tags;

  } catch (error) {
    console.log(error, "error")
  }
};

//api call function
const getCoords = async (geoBaseURL, city, geoAPIKey, travelDur) => {
  const res = await fetch(geoBaseURL + city + geoAPIKey);
  try {
    const data = await res.json();
    // console.log(data);
    const weatherRes = await fetch(`${weatherbitBaseURL}&lat=${data.geonames[0].lat}&lon=${data.geonames[0].lng}&start_day=${travelDur}&end_day=${travelDur}&tp=daily${weatherbitAPIKey}&units=I`);
    const weatherData = await weatherRes.json();
    const appData = {
      ...data,
      ...weatherData
    }
    console.log(appData);
    console.log(appData.geonames[0].countryName);
    return appData;
  } catch (error) {
    console.log("error", error);
  }
};
// save data to server with POST
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
//update UI with data from server.js and user input feelings
const updateUI = async () => {
  const request = await fetch("/projectdata");
  try {
    const allData = await request.json();
    console.log(allData);
    document.getElementById("entry").className = "holderResponse";
    document.getElementById("content").innerHTML = `Country: ${
      allData.slice(-1)[0].country
    }`;
    document.getElementById("date").innerHTML = `City: ${
      allData.slice(-1)[0].city
    }`;
    document.getElementById("highTemp").innerHTML = `High Temperature: ${
      allData.slice(-1)[0].highTemp
    }`;
    document.getElementById("minTemp").innerHTML = `Low Temperature: ${
      allData.slice(-1)[0].minTemp
    }`;
    document.getElementById("precip").innerHTML = `Precipitation: ${
      allData.slice(-1)[0].precip
    }`;
    document.getElementById("travelDate").innerHTML = `Travel Date: ${
      allData.slice(-1)[0].travelDate
    }`;
    document.getElementById("daysCountdown").innerHTML = `Days Until Travel: ${
      allData.slice(-1)[0].daysCountdown
    }`;
  } catch (error) {
    console.log("error", error);
  }
};

const getWeather = async (weatherbitBaseURL, data, weatherbitAPIKey) => {
  const res = await fetch(`${weatherbitBaseURL}&lat=${data.geonames[0].lat}&lon=${data.geonames[0].lng}${weatherbitAPIKey}`);
  try {
    const weatherData = await res.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log("error", error);
  }
}

export { performAction };