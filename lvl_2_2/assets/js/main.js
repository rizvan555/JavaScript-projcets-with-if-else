const rangeInput = document.querySelector('form input[type="range"]');
const aqiValue = document.querySelector("#aqi-value");
const result = document.querySelector("#result");

function checkAirQuality() {
  const checker = rangeInput.value;
  aqiValue.textContent = checker;

  if (checker <= 50) {
    result.innerHTML =
      "Level of health concern: Good<br>Level of health effect: Little or no risk";
    document.body.classList.toggle("green");
    label.innerText = "AQI: " + checker;
  } else if (checker <= 100) {
    result.innerHTML =
      "Level of health concern: Moderate<br>Level of health effect: Acceptable quality";
    document.body.classList.toggle("yellow");
    label.innerText = "AQI: " + checker;
  } else if (checker <= 150) {
    result.innerHTML =
      "Level of health concern: Unhealthy for sensitive groups<br>Level of health effect: Generable publics not likely affected";
    document.body.classList.toggle("orange");
    label.innerText = "AQI: " + checker;
  } else {
    result.innerHTML = "Invalid AQI value";
    document.body.classList.toggle("");
    label.innerText = "AQI: " + checker;
  }
}
