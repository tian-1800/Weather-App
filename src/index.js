import "./style.css";
import getWeather from "./api";

const form = (() => {
  const userInput = document.getElementById("city");
  const city = userInput.value;
  const error = userInput.nextElementSibling;
  const button = document.getElementById("submit");

  const showError = () => {
    if (userInput.validity.valueMissing) {
      error.textContentext = "Please enter a city.";
    } else if (userInput.validity.patternMismatch) {
      error.textContent = "Must be all alphabet character";
    }
  };
  const init = () => {
    button.addEventListener("click", () => {
      if (userInput.validity.valid) {
        getWeather(city);
      } else {
        showError();
        event.preventDefault();
      }
    });
  };

  return {
    init,
  };
})();

form.init();
