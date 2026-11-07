const message = document.getElementById("message");
const count = document.getElementById("count");


message.addEventListener("input", function () {
  let length = message.value.length;
  count.textContent = length;

  if (length >= 80) {
    count.style.color = "green";
    if (length >= 90) {
      count.style.color = "red";
      if (length === 100) {
        alert('the max-number is "100"');
      }
    }
  }
});
