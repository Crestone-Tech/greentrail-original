const { Town } = require("../models/Location");

const townData = [
  {
    town_name: "Nelson",
    province_id: 2,
  },
  {
    town_name: "Revelstoke",
    province_id: 2,
  },
];

const seedTown = () => Town.bulkCreate(townData);

module.exports = seedTown;
