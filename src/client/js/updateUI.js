// update UI with data from API calls
const updateUI = async () => {
  const request = await fetch('/projectdata');
  try {
    const allData = await request.json();
    document.querySelector('.inputColumn').innerHTML = '';
    document.getElementById('entry').className = 'holderResponse';
    document.getElementById('tripTitle').innerHTML = `My Trip To: ${
      allData.slice(-1)[0].city
    }, ${allData.slice(-1)[0].country} `;
    document.getElementById('travelDate').innerHTML = `Departing On: ${
      allData.slice(-1)[0].travelDate
    }`;
    document.getElementById('daysCountdown').innerHTML = `${
      allData.slice(-1)[0].city
    } is ${allData.slice(-1)[0].daysCountdown} days away.`;

    document.getElementById('typicalWeather').innerHTML = 'Typical Weather:';
    document.getElementById('high').innerHTML = `High: ${
      allData.slice(-1)[0].highTemp
    }°F`;
    document.getElementById('low').innerHTML = `Low: ${
      allData.slice(-1)[0].minTemp
    }°F`;
    document.getElementById('precipitation').innerHTML = `Precipitation: ${
      allData.slice(-1)[0].precip
    }"`;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { updateUI };
