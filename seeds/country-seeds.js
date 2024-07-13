const { Country } = require('../models/Location');

const countryData = [
  {
    country_name: "Canada",
  },
  {
    country_name: "Mexico",
  },
  {
    country_name: "United Status of America",
  },
];

const seedCountry = () => Country.bulkCreate(countryData);

module.exports = seedCountry;