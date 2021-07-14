// test functionality of get request with launching express server

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const unitServer = express();

/* Middleware */
// const bodyParser = require('body-parser'); deprecated
const bodyParser = require('body-parser');

// Here we are configuring express to use body-parser as middle-ware.
unitServer.use(bodyParser.urlencoded({ extended: false }));
unitServer.use(bodyParser.json());

const weather = [64, 54, 32, 82];

unitServer.get('/projectData', (req, res) => res.json(weather));

module.exports = unitServer;
