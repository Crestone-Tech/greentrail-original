const { Province } = require("../models/Location");

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
  {
    province_name: "Aguascalientes",
    country_id: 2,
  },
  {
    province_name: "Baja California",
    country_id: 2,
  },
  {
    province_name: "Baja California Sur",
    country_id: 2,
  },
  {
    province_name: "Campeche",
    country_id: 2,
  },
  {
    province_name: "Chiapas",
    country_id: 2,
  },
  {
    province_name: "Chihuahua",
    country_id: 2,
  },
  {
    province_name: "Coahuila",
    country_id: 2,
  },
  {
    province_name: "Colima",
    country_id: 2,
  },
  {
    province_name: "Durango",
    country_id: 2,
  },
  {
    province_name: "Guanajuato",
    country_id: 2,
  },
  {
    province_name: "Guerrero",
    country_id: 2,
  },
  {
    province_name: "Hidalgo",
    country_id: 2,
  },
  {
    province_name: "Jalisco",
    country_id: 2,
  },
  {
    province_name: "México",
    country_id: 2,
  },
  {
    province_name: "Mexico City",
    country_id: 2,
  },
  {
    province_name: "Michoacán",
    country_id: 2,
  },
  {
    province_name: "Morelos",
    country_id: 2,
  },
  {
    province_name: "Nayarit",
    country_id: 2,
  },
  {
    province_name: "Nuevo León",
    country_id: 2,
  },
  {
    province_name: "Oaxaca",
    country_id: 2,
  },
  {
    province_name: "Puebla",
    country_id: 2,
  },
  {
    province_name: "Querétaro",
    country_id: 2,
  },
  {
    province_name: "Quintana Roo",
    country_id: 2,
  },
  {
    province_name: "San Luis Potosí",
    country_id: 2,
  },
  {
    province_name: "Sinaloa",
    country_id: 2,
  },
  {
    province_name: "Sonora",
    country_id: 2,
  },
  {
    province_name: "Tabasco",
    country_id: 2,
  },
  {
    province_name: "Tamaulipas",
    country_id: 2,
  },
  {
    province_name: "Tlaxcala",
    country_id: 2,
  },
  {
    province_name: "Veracruz",
    country_id: 2,
  },
  {
    province_name: "Yucatán",
    country_id: 2,
  },
  {
    province_name: "Zacatecas",
    country_id: 2,
  },
];

const seedProvince = () => Province.bulkCreate(provinceData);

module.exports = seedProvince;