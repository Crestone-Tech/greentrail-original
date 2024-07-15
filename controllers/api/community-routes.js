const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Country, Province, Town, Site, Community } = require("../../models");
 

route.get('/', async (req,res)=> {
    try{
        const communityData = await Community.findAll();
        res.status(200).json(communityData);

    }catch(err) {
        res.status(500).json(err);
    }
});
router.get('community/:id', async (req,res) => {
    try{ 
      const townData = await Town.findByPk(req.params.id, {
        include:[{model:Site, model: Community}]
      });
      if(!townData){
        res.status(404).json({message:"No such town exists as community"})
      }
      res.status(200).json(townData)
    } catch(err){
      res.status(500).json(err)
    }
  });
  
  module.exports = router;