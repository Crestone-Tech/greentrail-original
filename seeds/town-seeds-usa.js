const { Town } = require("../models/Location");

const townData = [
  // British Columbia
  {
    town_name: "Creston",
    province_id: 2,
  },
];

const seedTown = () => Town.bulkCreate(townData);

module.exports = seedTown;
