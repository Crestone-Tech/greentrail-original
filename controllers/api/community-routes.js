const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Country, Province, Town, Site, Community } = require("../../models");

router.get('community/:id', async (req,res) => {
    try{ 
      const townData = await Town.findByPk(req.params.id, {
        include:[{model:Site, model: Community}]
      });
      if(!townData){
        res.status(404).json({message:"No such town exists as community"})
      }
    } catch(err){
      res.status(500).json(err)
    }
  });
  module.exports = router;