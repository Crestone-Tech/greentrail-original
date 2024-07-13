const { Town } = require("../models/Location");

const townData = [
  {
    town_name: "Compostela",
    province_id: 31,
  },
  {
    town_name: "Jala",
    province_id: 31,
  },
  {
    town_name: "Sayulita",
    province_id: 31,
  },
  {
    town_name: "Mexcaltitan",
    province_id: 31,
  },
  {
    town_name: "Chacala",
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
];

const seedTown = () => Town.bulkCreate(townData);

module.exports = seedTown;
