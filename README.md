# Travel Plan App

## Overview
This is a travel planner app that allows the user to input destination city, country and date of travel.  The app calls 3 APIs (pixabay, weatherbit, geonames).

### Functionality
Once a destination (city and country) and travel date is gathered from user, the app will:
    -display a countdown of number of days until the trip is commenced.
    -determine the geographical coordinates of the destination city by calling the geonames api.
    -return the typical weather (historical weather from weatherbit api basedc on geographical coordinates) for the travelers location at the time of their trip.
    -display a photo of the destination city.  (If no photo is available, the app will display a photo of the destination country.)


