function getWeather() {
  const cityInput = document.getElementById('cityInput').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=YOUR_API_KEY&units=metric`)
      .then(response => response.json())
      .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          if (data.cod === 200) {
              const temperature = data.main.temp;
              const description = data.weather[0].description;
              weatherInfo.innerHTML = `Temperature: ${temperature}°C <br> Description: ${description}`;
          } else {
              weatherInfo.innerHTML = `City not found. Please try again.`;
          }
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `An error occurred while fetching weather data. Please try again later.`;
      });
}
