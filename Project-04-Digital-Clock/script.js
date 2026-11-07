// Select Elements
const numofday = document.querySelector(".numofday");
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const day = document.querySelector(".day");

const hour = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const state = document.querySelector(".state");

// Update Clock
function updateClock() {
  const date = new Date();
  // Date
  day.textContent = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);
  numofday.textContent = date.getDate();
  month.textContent = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(date);

  year.textContent = date.getFullYear();

  // Time
  const newhours = String(date.getHours() % 12 || 12).padStart(2, "0");
  const newminutes = String(date.getMinutes()).padStart(2, "0");
  const newseconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  hour.textContent = newhours;
  minutes.textContent = newminutes;
  seconds.textContent = newseconds;
  state.textContent = ampm;
}
updateClock();
// Update every second
setInterval(updateClock, 1000);
