//  part of Increase
document.getElementById("Increase").addEventListener("click", function () {
  let counter_in = Number(document.getElementById("counter").textContent);
  let new_counter_in = counter_in + 1;
  document.getElementById("counter").innerHTML = new_counter_in;
});
//  part of Decrease
document.getElementById("Decrease").addEventListener("click", function () {
  let counter_de = Number(document.getElementById("counter").textContent);
  let new_counter_de = counter_de - 1;
  document.getElementById("counter").innerHTML = new_counter_de;
});
//  part of Reset
document.getElementById("Reset").addEventListener("click", function () {
  let counter_re = Number(document.getElementById("counter").textContent);
  let new_counter_re = counter_re * 0;
  document.getElementById("counter").innerHTML = new_counter_re;
});
