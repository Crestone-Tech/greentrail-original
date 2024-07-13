const { Site } = require("../models/Location");

const siteData = [
  {
    site_name: "Las Brisas",
    town_id: 1,
    street_address: "Av. Chacalilla 4",
    latitude: "21.164360540632767",
    longitude: "-105.22449577199455",
    map_link: "https://maps.app.goo.gl/sG5HpwaD3M1xvFRCA",
  },
  {
    site_name: "Plaza de Chacala",
    town_id: 1,
    street_address: "Av. Chalilla 23",
    latitude: "21.165258238540986",
    longitude: "-105.22498938255742",
    map_link: "https://maps.app.goo.gl/GCYB7N6kUnB2JhyLA",
  },
  {
    site_name: "Casa Liquen",
    town_id: 1,
    street_address: "Atlantico 2",
    latitude: "21.165784443329635",
    longitude: "-105.22560976447247",
    map_link: "https://maps.app.goo.gl/hTLMkCEziD2ves5c9",
  },
  // {
  //   site_name: "Volcán Durón Ivanna",
  //   town_id: 1,
  //   street_address: "",
  //   latitude: "",
  //   longitude: "",
  //   map_link: "https://maps.app.goo.gl/hTLMkCEziD2ves5c9",
  // },
];

const seedSite = () => Site.bulkCreate(siteData);

module.exports = seedSite;