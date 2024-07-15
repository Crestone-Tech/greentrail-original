const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Country, Province, Town, Site, Community } = require("../../models");
 
// Route to get listing of all communities
router.get('/', async (req,res)=> {
    try{
        const communityData = await Community.findAll();
        res.status(200).json(communityData);

    }catch(err) {
        res.status(500).json(err);
    }
});

//Route to get community by id, WIP
router.get('community/:id', async (req,res) => {
    try{ 
      const townData = await Community.findByPk(req.params.id, {
        include:[{model:Site, model: Town}]
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