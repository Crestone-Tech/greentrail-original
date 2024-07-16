/* DEPENDENCIES */
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Provider } = require("../../models");

/* ROUTES */
/* get listing of all providers */
router.get("/", async (req, res) => {
  try {
    const providerData = await Provider.findAll();
    res.status(200).json(providerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* POST create a Provider */
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const providerData = await Provider.create(req.body);
    res.status(200).json(providerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* EXPORTS */
module.exports = router;
