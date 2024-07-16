// DEPENDENCIES

// ELEMENTS
const addServiceModal = $("#addServiceModal");
const saveNewServiceProviderBtn = $("#saveNewServiceProviderBtn");

// DATA
const TAGS = {
    AMENITY: 1,
    COFFEE: 2,
    COOKING_LESSONS: 3,
    EAT: 4,
    EXPLORE: 5,
    FLORA_AND_FAUNA: 6,
    GROCERIES: 7,
    HISTORY: 8,
    LANGUAGE_LESSONS: 9,
    LEARN: 10,
    MASSAGE: 11,
    STAY: 12,
  };

// FUNCTIONS
function handleSaveAmenityProvider() {
    return addProviderAndTag(TAGS.AMENITY);
}

const addProviderAndTag = async (event, tagId) => {
  const community_id = $("#serviceCommunityInput").val();
  const provider_name = $("#serviceNameInput").val();
  const site_id = 14;
  //const service = $("#serviceTypeInput").val();
  const service = $("#serviceDescriptionInput").val();

  if (!(serviceCommunity && serviceDescription && serviceName && serviceType)) {
    alert("All fields are required");
    return;
  }
  console.log("community_id", community_id);
  console.log("provider_name", provider_name);
  console.log("site_id", site_id);
  console.log("service", service);

  const response = await fetch("/api/providers", {
    method: "POST",
    body: JSON.stringify({
      community_id,
      provider_name,
      site_id,
      service,
      tag_id: tagId,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log(response);
  } else {
    alert("response failed");
  }
};

saveNewServiceProviderBtn.on('click', handleSaveServiceProvider);