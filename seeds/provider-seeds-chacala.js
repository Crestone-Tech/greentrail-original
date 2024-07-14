const Provider = require("../models/Provider");

const providerData = [
  {
    provider_name: "Café Palmar",
    service: "coffee, ice cream",
    community_id: 1,
    site_id: 3,
  },
  {
    provider_name: "Chac Mool",
    service: "restaurant",
    community_id: 1,
    site_id: 25,
  },
  {
    provider_name: "Lalaxtli",
    service: "bakery, restaurant",
    community_id: 1,
    site_id: 11,
  },
  {
    provider_name: "Las Ramadas de Alvaro",
    service: "restaurant",
    community_id: 1,
    site_id: 30,
  },
  {
    provider_name: "Palapa de Don Isidro",
    service: "restaurant",
    community_id: 1,
    site_id: 33,
  },
  {
    provider_name: "Restaurante Chico's",
    service: "restaurant",
    community_id: 1,
    site_id: 26,
  },
  {
    provider_name: "Restaurante Conny's",
    service: "restaurant",
    community_id: 1,
    site_id: 27,
  },
  {
    provider_name: "Restaurante Las Brisas",
    service: "",
    community_id: 1,
    site_id: 29,
  },
  {
    provider_name: "Surfer's Pizza",
    service: "restaurant",
    community_id: 1,
    site_id: 34,
  },
  {
    provider_name: "Tacos Kicha",
    service: "tacos, water office",
    community_id: 1,
    site_id: 35,
  },
  {
    provider_name: "Tapas Bar de Majahua",
    service: "restaurant",
    community_id: 1,
    site_id: 36,
  },
  {
    provider_name: "Taquería Acela",
    service: "tacos",
    community_id: 1,
    site_id: 20,
  },
];

const seedProvider = () => Provider.bulkCreate(providerData);

module.exports = seedProvider;
