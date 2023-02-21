const input = document.querySelector('form input[type="text]');

function rechner(number) {
  let differenz = number - 27;
  if (differenz > 27) {
    console.log(differenz * 2);
  }
}
rechner(35);
rechner(74);
rechner(123);
