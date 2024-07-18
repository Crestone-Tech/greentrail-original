/* VARIABLES */
const explore = document.querySelector("#explore");
const stay = document.querySelector("#stay");
const eat = document.querySelector("#eat");
const events = document.querySelector("#events");
const amenities = document.querySelector("#amenities");

const exploreDetails = document.querySelector("#explore-details");
const stayDetails = document.querySelector("#stay-details");
const eatDetails = document.querySelector("#eat-details");
const eventDetails = document.querySelector("#event-details");
const amenitiesDetails = document.querySelector("#amenities-details");

const selector = [explore, stay, eat, events, amenities];
const details = [
  exploreDetails,
  stayDetails,
  eatDetails,
  eventDetails,
  amenitiesDetails,
];

let lastUnhidden = 0;

/* FUNCTIONS */
/* Hide last shown */
function hideOther() {
  details[lastUnhidden].classList.add("hidden");
}

/* Show selected section */
function showSection(index) {
  hideOther();
  details[index].classList.remove("hidden");
  lastUnhidden = index;
}

/* EVENT LISTENERS */
selector.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    showSection(index);
  });
});
