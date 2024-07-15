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
    const ProvinceData = await Province.findByPk(req.params.id, {
      include:[{model:Town}]
    });
    res.status(200).json(ProvinceData);
  } catch(err){
    res.status(500).json(err);
  }
});

/*Get all towns available */

router.get('/towns', async(req,res)=> {
  try {
    const townsData = await Town.findAll();
    res.status(200).json(townsData);
  }catch(err){
    res.status(500).json(err)
  }
});

/* Get route to get all towns plus sites associated with them */
router.get('towns/:id', async (req,res) => {
  try{ 
    const townData = await Town.findByPk(req.params.id, {
      include:[{model:Site}]
    });
    if(!townData){
      res.status(404).json({message:"No such town exists as community"})
    }
  } catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;