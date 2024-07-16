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
    const serviceCommunity = $("#serviceCommunityInput").val();
    const serviceName = $("#serviceNameInput").val();
    const serviceType = $("#serviceTypeInput").val();
    const serviceDescription = $("#serviceDescriptionInput").val();

    // if (
    //     !(
    //         serviceCommunity &&
    //         serviceDescription &&
    //         serviceName &&
    //         serviceType
    //     )
    // ) {
    //     alert("All fields are required");
    //     return;
    // }
    console.log("serviceCommunity", serviceCommunity);
    console.log("serviceDescription", serviceDescription);
    console.log("serviceName", serviceName);
    console.log("serviceType", serviceType);

    const response = await fetch("/api/communities/community/Chacala", {
      method: "GET",
    });  
    if (response.ok) {
        console.log(response);
    } else {
        alert("response failed");
    }


}

saveNewServiceProviderBtn.on('click', handleSaveServiceProvider);