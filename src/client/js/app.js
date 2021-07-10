/* Global Variables */
const geoAPIKey = "&maxRows=1&username=icufishmg";
const geoBaseURL = "http://api.geonames.org/searchJSON?q=";
const weatherbitAPIKey = "&key=1d235b160c6c4917b499388daca9bc82";
const weatherbitBaseURL = "https://api.weatherbit.io/v2.0/forecast/daily?";






// event listener that initiates api call;

document.getElementById("generate").addEventListener("click", performAction);

// callback function called by event listener
function performAction(e) {
  const dateT = document.getElementById("dateField").value;
  const travelDate = [dateT.slice(-4), dateT.slice(0,4)].join('-');

  console.log(travelDate);
  const userResponse = document.getElementById("feelings").value;
  const city = document.getElementById("city").value;
  const checkDate = new Date(travelDate).getTime();
  const daysCountdown = Math.round(((checkDate - d.getTime()) / (1000*60*60*24)+1))



  //api call chained with server.js call and UI update of data from api and user
  getCoords(geoBaseURL, city, geoAPIKey).then(function (weatherData) {


    postData("/travelinfo", {
      city: weatherData.city_name,
      country: weatherData.country_code,
      travelDate: travelDate,
      daysCountdown: daysCountdown,
    }).then(updateUI());
  });
}

// Create a new date instance dynamically with JS
let d = new Date();

let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

//api call function
const getCoords = async (geoBaseURL, city, geoAPIKey) => {
  const res = await fetch(geoBaseURL + city + geoAPIKey);
  try {
    const data = await res.json();
    // const long = data.geonames[0].lng;
    // const lat = data.geonames[0].lat;
    const weatherRes = await fetch(`${weatherbitBaseURL}&lat=${data.geonames[0].lat}&lon=${data.geonames[0].lng}${weatherbitAPIKey}`);
    const weatherData = await weatherRes.json();
    console.log(weatherData);
    return weatherData;
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
    // document.getElementById("temp").innerHTML = `Longitude: ${
    //   allData.slice(-1)[0].longitude
    // }`;
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