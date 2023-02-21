const weatherChecker = document.querySelector('form input[type="number"]');
const result = document.querySelector("p");

function weather() {
  if (weatherChecker.value >= 8) {
    result.innerHTML = "super";
  } else if (weatherChecker.value >= 6) {
    result.innerHTML = "gut";
  } else if (weatherChecker.value >= 3) {
    result.innerHTML = "okay";
  } else if (weatherChecker.value >= 0) {
    result.innerHTML = "schlecht";
  }
}
weather();
