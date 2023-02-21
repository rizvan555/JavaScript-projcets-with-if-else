const checkOld = document.querySelector('form input[type="text"]');
const result = document.querySelector("p");

function adult() {
  if (checkOld.value >= 18) {
    result.innerHTML = "volljährig";
  } else (checkOld.value <= 18) {
    result.innerHTML = "mindestjährig";
  }
}
adult();
