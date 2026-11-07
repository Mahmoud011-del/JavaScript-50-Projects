// Select Elements
const numofday = document.querySelector(".numofday");
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const day = document.querySelector(".day");

const hour = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
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

  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  // Update Time Elements
  hour.textContent = newhours;
  minutes.textContent = newminutes;
  state.textContent = ampm;
  // say state

  const greeting = document.querySelector(".greeting");

  if (ampm === "AM") {
    greeting.textContent = "Good Morning";
  } else if (newhours < 18) {
    greeting.textContent = "Good Afternoon";
  } else {
    greeting.textContent = "Good Evening";
  }
}

// Initial Update
updateClock();

// Update Every Second
setInterval(updateClock, 1000);
