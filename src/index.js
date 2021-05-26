import "./style.css";
import getWeather from "./api";

const formRead = () => {
  const userInput = document.getElementById("city");
  const city = userInput.value;
  const error = userInput.nextElementSibling;

  const showError = () => {
    if (userInput.validity.valueMissing) {
      error.textContentext = "Please enter a city.";
    } else if (userInput.validity.patternMismatch) {
      error.textContent = "Must be all alphabet character";
    }
  };

  if (userInput.validity.valid) {
    getWeather(city);
  } else {
    showError();
  }
};

const button = document.getElementById("button");
button.addEventListener("click", formRead);
