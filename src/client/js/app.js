/* Global Variables */
const geoApiKey = "&maxRows=1&username=icufishmg";
const geoBaseURL = "http://api.geonames.org/searchJSON?q=";





// event listener that initiates api call;

document.getElementById("generate").addEventListener("click", performAction);

// callback function called by event listener
function performAction(e) {
  const travelDate = document.getElementById("dateField").value;
  console.log(travelDate);
  const userResponse = document.getElementById("feelings").value;
  const city = document.getElementById("city").value;

  const checkDate = new Date(travelDate).getTime();
  const daysCountdown = Math.round(((checkDate - d.getTime()) / (1000*60*60*24)+1))
  console.log(daysCountdown);

  //api call chained with server.js call and UI update of data from api and user
  getWeather(geoBaseURL, city, geoApiKey).then(function (data) {

    postData("/travelinfo", {
      long: `${data.geonames[0].lng}°`,
      lat: `${data.geonames[0].lat}°`,
      country: data.geonames[0].countryName,
      travelDate: travelDate,
      daysCountdown: daysCountdown,
    }).then(updateUI());
  });
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

//api call function
const getWeather = async (geoBaseURL, city, geoApiKey) => {
  const res = await fetch(geoBaseURL + city + geoApiKey);
  try {
    const data = await res.json();
    console.log(data);
    return data;
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
    document.getElementById("date").innerHTML = `Latitude: ${
      allData.slice(-1)[0].latitude
    }`;
    document.getElementById("temp").innerHTML = `Longitude: ${
      allData.slice(-1)[0].longitude
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


export { performAction };