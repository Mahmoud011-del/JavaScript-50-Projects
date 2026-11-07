let generator = document.querySelector(".generator");
let generatorshow = document.querySelector(".value-of-number");

let max_input = document.querySelector(".max-input");
let min_input = document.querySelector(".min-input");

generator.onclick = generatorNumber;

function generatorNumber() {
  const max = Number(max_input.value);
  const min = Number(min_input.value);

  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  generatorshow.innerHTML = num;
 
}
