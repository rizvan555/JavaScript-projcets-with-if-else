const checkOld = document.querySelector('form input[type="text"]');
const result = document.querySelector("p");

function adult() {
  if (checkOld.value >= 18) {
    console.log(checkOld.value >= 18);
    result.innerHTML = "volljährig";
  } else {
    console.log(checkOld.value >= 18);
    result.innerHTML = "mindestjährig";
  }
}
adult();
