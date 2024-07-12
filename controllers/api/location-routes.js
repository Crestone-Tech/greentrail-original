/* DEPENDENCIES */
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Country, Province, Town, Site } = require("../../models");

/* ROUTES */
router.get("/countries", async (req, res) => {
  try {
    const countryData = await Country.findAll();
    res.status(200).json(countryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("countries/provinces", async (req, res) => {
  try {
    const provinceData = await Province.findAll();
    res.status(200).json(provinceData);
  } catch (err) {
    res.status(500).json(err);
  }
});
