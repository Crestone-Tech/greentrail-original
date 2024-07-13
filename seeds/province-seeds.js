const { Province } = require('../models/Location');

const provinceData = [
  {
    province_name: "Alberta",
    country_id: 1,
  },
  {
    province_name: "British Columbia",
    country_id: 1,
  },
  {
    province_name: "Manitoba",
    country_id: 1,
  },

  {
    province_name: "New Brunswick",
    country_id: 1,
  },
  {
    province_name: "Newfoundland and Labrador",
    country_id: 1,
  },
  {
    province_name: "Nova Scotia",
    country_id: 1,
  },
  {
    province_name: "Ontario",
    country_id: 1,
  },
  {
    province_name: "Prince Edward Island",
    country_id: 1,
  },
  {
    province_name: "Quebec",
    country_id: 1,
  },
  {
    province_name: "Saskatchewan",
    country_id: 1,
  },
  {
    province_name: "Yukon",
    country_id: 1,
  },
  {
    province_name: "Nunavut",
    country_id: 1,
  },
  {
    province_name: "Northwest Territory",
    country_id: 1,
  },
];

const seedProvince = () => Province.bulkCreate(provinceData);

module.exports = seedProvince;