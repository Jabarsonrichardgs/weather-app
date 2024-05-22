function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '2f20863cdd0f601121f799b0590658bd'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const cityName = data.name;
        const country = data.sys.country;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
  
        weatherInfo.innerHTML = `
          <p>Location: ${cityName}, ${country}</p>
          <p>Temperature: ${temperature}°C</p>
          <p>Description: ${description}</p>
          <img src="${iconUrl}" alt="Weather Icon">
        `;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
      });
  }
  
  
