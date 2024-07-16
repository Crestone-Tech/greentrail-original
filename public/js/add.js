const addServiceModal = $("#addServiceModal");
const saveNewServiceProviderBtn = $("#saveNewServiceProviderBtn");

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



const handleSaveServiceProvider = async (event) => {
    const serviceCommunityInput = $("#serviceCommunityInput");
    const serviceNameInput = $("#serviceNameInput");
    const serviceTypeInput = $("#serviceTypeInput");
    const serviceDescriptionInput = $("#serviceDescriptionInput");

    if (
        !(
            serviceCommunityInput.val() &&
            serviceDescriptionInput.val() &&
            serviceNameInput.val() &&
            serviceTypeInput.val()
        )
    ) {
        alert("All fields are required");
        return;
    }
    console.log("serviceCommunityInput", serviceCommunityInput.val());
    console.log("serviceDescriptionInput", serviceDescriptionInput.val());
    console.log("serviceNameInput", serviceNameInput.val());
    console.log("serviceTypeInputa", serviceTypeInput.val());


}

saveNewServiceProviderBtn.on('click', handleSaveServiceProvider);