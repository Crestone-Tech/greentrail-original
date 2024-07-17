/* VARIABLES */
const stay = document.querySelector("#stay");
const eat = document.querySelector("#eat");
const explore = document.querySelector("#explore");
const events = document.querySelector("#events");
const amenities = document.querySelector("#amenities");
const about = document.querySelector("#about");

const stayDetails = document.querySelector("#stay-details");
const eatDetails = document.querySelector("#eat-details");
const exploreDetails = document.querySelector("#explore-details");
const eventDetails = document.querySelector("#event-details");
const amenitiesDetails = document.querySelector("#amenities-details");
const aboutDetails = document.querySelector("#about-details");

const selector = [stay, eat, explore, events, amenities, about];
const details = [
  stayDetails,
  eatDetails,
  exploreDetails,
  eventDetails,
  amenitiesDetails,
  aboutDetails,
];

let lastUnhidden = 2;

/* FUNCTIONS */
function hideOther() {
  details[lastUnhidden].classList.add("hidden");
}

function showSection(index) {
  console.log(`Showing ${index}, hiding ${lastUnhidden}`);
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
