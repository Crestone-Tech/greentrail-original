const { Town } = require("../models/Location");

const townData = [
  {
    town_name: "Creston",
    province_id: 2,
  },
  {
    town_name: "Fernie",
    province_id: 2,
  },
  {
    town_name: "Nelson",
    province_id: 2,
  },
  {
    town_name: "Penticton",
    province_id: 2,
  },
  {
    town_name: "Revelstoke",
    province_id: 2,
  },
  {
    town_name: "Squamish",
    province_id: 2,
  },
  {
    town_name: "Tofino",
    province_id: 2,
  },
  {
    town_name: "Victoria",
    province_id: 2,
  },
  {
    town_name: "Whistler",
    province_id: 2,
  },
];

const seedTown = () => Town.bulkCreate(townData);

module.exports = seedTown;
