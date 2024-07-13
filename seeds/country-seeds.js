const { Country } = require('../models/Location');

const countryData = {

};

const seedCountry = () => Country.bulkCreate(countryData);

module.exports = seedCountry;