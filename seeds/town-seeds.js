const { Town } = require("../models/Location");

const townData = [
  // Nayarit
  {
    town_name: "Chacala",
    province_id: 31,
  },
  {
    town_name: "Compostela",
    province_id: 31,
  },
  {
    town_name: "Jala",
    province_id: 31,
  },
  {
    town_name: "Mexcaltitan",
    province_id: 31,
  },
  {
    town_name: "San Francisco",
    province_id: 31,
  },
  {
    town_name: "Santa Maria del Oro",
    province_id: 31,
  },
  {
    town_name: "Sayulita",
    province_id: 31,
  },
  // Jalisco
  {
    town_name: "Ajijic",
    province_id: 26,
  },
  {
    town_name: "Chapala",
    province_id: 26,
  },
  {
    town_name: "Cocula",
    province_id: 26,
  },
  {
    town_name: "Guadalajara",
    province_id: 26,
  },
  {
    town_name: "Lagos de Moreno",
    province_id: 26,
  },
  {
    town_name: "Mascota",
    province_id: 26,
  },
  {
    town_name: "Mazamitla",
    province_id: 26,
  },
  {
    town_name: "San Sebastián del Oeste",
    province_id: 26,
  },
  {
    town_name: "Sayula",
    province_id: 26,
  },
  {
    town_name: "Talpa de Allende",
    province_id: 26,
  },
  {
    town_name: "Tapalpa",
    province_id: 26,
  },
  {
    town_name: "Tequila",
    province_id: 26,
  },
  {
    town_name: "Temacapulín",
    province_id: 26,
  },
  {
    town_name: "Zapopan",
    province_id: 26,
  },
];

const seedTown = () => Town.bulkCreate(townData);

module.exports = seedTown;
