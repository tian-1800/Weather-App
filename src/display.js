const cityName = document.getElementById("city-name-display");
const temperature = document.getElementById("temp-display");

const weather = document.getElementById("weather-display");
const weatherIcon = document.getElementById("weather-icon");
const range = document.getElementById("temperature-range");

const loadTime = document.getElementById("loading-time");

function degreeDisplay(num) {
  const deg = Math.floor(num - 273);
  return `${deg}\xB0C`;
}

function display(cityObj) {
  cityName.textContent = cityObj.name;
  temperature.textContent = degreeDisplay(cityObj.temperature);
  weather.textContent = cityObj.weather;
  weatherIcon.src = `http://openweathermap.org/img/wn/${cityObj.icon}@4x.png`;
  range.textContent = `${degreeDisplay(cityObj.minTemp)} - ${degreeDisplay(cityObj.maxTemp)}`;
}
function displayLoadTime(num) {
    loadTime.textContent = `API loading time ${num}ms`;
}
export {
    display,displayLoadTime};
