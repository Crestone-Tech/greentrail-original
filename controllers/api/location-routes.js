/* DEPENDENCIES */
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Country, Province, Town, Site } = require("../../models");

/* ROUTES */

/*get all countries*/

router.get("/countries", async (req, res) => {
  try {
    const countryData = await Country.findAll();
    res.status(200).json(countryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/*get country with associated Provinces*/

router.get('countries/:id/provinces', async (req,res) => {
  try {
    const countryData = await Country.findByPk(req.params.id, {
      include: [{model:Province}]
    });
    res.status(200).json(countryData);
} catch(err) {
  res.status(500).json(err)
}
}); 

/*Get provinces with associated towns */

router.get('provinces/:id/towns', async(req, res) => {
  try {
    const townData = await Province.findByPk(req.params.id, {
      include:[{model:Town}]
    });
    res.status(200).json(townData);
  } catch(err){
    res.status(500).json(err);
  }

});



router.get("/provinces", async (req, res) => {
  try {
    const provinceData = await Province.findAll();
    res.status(200).json(provinceData);
  } catch (err) {
    res.status(500).json(err);
  }
});
