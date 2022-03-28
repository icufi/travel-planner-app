# Travel Planner App

## Overview
This app allows the user to input destination city, country and date of travel.  The app calls 3 APIs (pixabay, weatherbit, geonames) and displays returned data about the users trip.

### Functionality
After a destination city, country and date have been input by the user the app:
    * displays a number of days countdown until the trip is commenced
    * gets the geographical coordinates of the destination city by calling the geonames API.
    * return the typical weather (historical weather from weatherbit API based on coordinates and time of year) for the travelers location at the time of their trip
    * displays a photo of the destination city.  (If no photo is available, the app will display a photo of the destination country.)


