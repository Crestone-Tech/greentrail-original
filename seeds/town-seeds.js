const { Town } = require("../models/Location");

const townData = [
  {
    town_name: "Canada",
  },
  {
    town_name: "Mexico",
  },
  {
    town_name: "United Status of America",
  },
];

const seedTown = () => Town.bulkCreate(townData);

module.exports = seedTown;
