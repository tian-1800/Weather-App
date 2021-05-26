import {display,displayLoadTime} from "./display";

const cityData = {};
async function getWeather(location) {
  const apiKey = "5ad36c27e137eb439587097a6b7d076d";
  const t0 = performance.now();
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    const t1 = performance.now();
    cityData.name = location;
    cityData.weather = data.weather[0].description;
    cityData.icon = data.weather[0].icon;
    cityData.humidity = data.main.humidity;
    cityData.temperature = data.main.temp;
    cityData.maxTemp = data.main.temp_max;
    cityData.minTemp = data.main.temp_min;
    display(cityData);
    displayLoadTime(t1 - t0);
  } catch (error) {
    console.log(error);
  }
}

export default getWeather;
/*  Data to gather:
    weather = .weather[0].id
    weather icon = .weather[0].icon
    humidity = .main.humidity
    temperature = .main.temp
    max temp = .main.temp_max
    min temp = .main.temp_min
 */
