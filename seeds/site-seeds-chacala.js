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
  {
    site_name: "Volcán Durón Ivanna",
    town_id: 1,
    street_address: "",
    latitude: null,
    longitude: null,
    map_link: "https://maps.app.goo.gl/hTLMkCEziD2ves5c9",
  },
  {
    site_name: "Lalaxtli",
    town_id: 1,
    street_address: "Av. Santa Socorro 100",
    latitude: "21.16580257750813",
    longitude: "-105.22716496251479",
    map_link: "https://maps.app.goo.gl/AdTUpNqDd7mxP22p9",
  },
  {
    site_name: "Sewage Ponds of Las Varas",
    town_id: 1,
    street_address: "",
    latitude: "21.178415331247148",
    longitude: "-105.15212022196012",
    map_link: "",
  },
  {
    site_name: "Cafe Palmar",
    town_id: 1,
    street_address: "Av. Islas Canarias 7",
    latitude: "21.165148833429846",
    longitude: "-105.22431923367543",
    map_link: "https://maps.app.goo.gl/z3RTmQBQJQF2m2W97",
  },
];

const seedSite = () => Site.bulkCreate(siteData);

module.exports = seedSite;
