/* VARIABLES */
/* Variables for homepage */
const subtitle = document.querySelector("#homepage-subtitle");
const subtitleText = [
  "Travel respectfully.",
  "Travel like a local.",
  "Travel ethically.",
];
let subtitleIndex = 0;

/* Variables for login page */
const signInButton = document.getElementById("sign-in-button");
const signUpButton = document.getElementById("sign-up-button");
const signInSection = document.getElementById("sign-in");
const signUpSection = document.getElementById("sign-up");

/* FUNCTIONS */
/* Change subtitle of homepage every 8.2 seconds */
function changeText() {
  subtitle.textContent = subtitleText[subtitleIndex];
  subtitleIndex = (subtitleIndex + 1) % subtitleText.length;
}

/* Show sign in and hide sign up */
function showSignIn() {
  signInSection.style.display = "block";
  signUpSection.style.display = "none";
}

/* Show sign up and hide sign in */
function showSignUp() {
  signInSection.style.display = "none";
  signUpSection.style.display = "block";
}

/* INITIALIZERS */
window.onload = () => {
  showSignIn();
  changeText();
  setInterval(changeText, 8200);
};

/* EVENT LISTENERS */
signInButton.addEventListener("click", showSignIn);
signUpButton.addEventListener("click", showSignUp);
