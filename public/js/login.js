/* VARIABLES */
const showSignInSection = document.getElementById("sign-in-button");
const showSignUpSection = document.getElementById("sign-up-button");
const signInSection = document.getElementById("sign-in");
const signUpSection = document.getElementById("sign-up");
const signup = document.querySelector("#go-sign-up");
const signin = document.querySelector("#go-sign-in");

/* FUNCTIONS */
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

/* Signs a user in */
const userSignIn = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#sign-in-email").value;
  const password = document.querySelector("#sign-in-password").value;

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

/* Signs a user up */
const userSignUp = async (event) => {
  event.preventDefault();

  const first = document.querySelector("#sign-up-first").value;
  const last = document.querySelector("#sign-up-last").value;
  const email = document.querySelector("#sign-up-email").value;
  const password = document.querySelector("#sign-up-password").value;

  if (first && last && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ first, last, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/"); // TODO change to user's dashboard
    } else {
      alert("Failed to sign up.");
    }
  } // TODO add else with error messages
};

/* EVENT LISTENERS */
showSignInSection.addEventListener("click", showSignIn);
showSignUpSection.addEventListener("click", showSignUp);
signin.addEventListener("click", userSignIn);
signup.addEventListener("click", userSignUp);
