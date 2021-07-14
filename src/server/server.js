/* eslint-disable no-undef */
// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware */
// const bodyParser = require('body-parser'); deprecated
const bodyParser = require('body-parser');

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server
const port = 8000;
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-console
// eslint-disable-next-line no-unused-vars
const server = app.listen(port, () => console.log(`server is listening on port ${port}`));

// callback function to save data received from app.js to projectData array
// eslint-disable-next-line no-unused-vars
function saveWeather(req, res) {
  const data = req.body;
  const newEntry = {
    city: data.city,
    country: data.country,
    highTemp: data.highTemp,
    minTemp: data.minTemp,
    precip: data.precip,
    travelDate: data.travelDate,
    daysCountdown: data.daysCountdown,
  };
  projectData.push(newEntry);
  // eslint-disable-next-line no-console
  console.log(projectData);
}

// get and post route for receiving and sending data from app.js
app.get('/projectdata', (req, res) => res.send(projectData));
app.post('/travelinfo', saveWeather);

