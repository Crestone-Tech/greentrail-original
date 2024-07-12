/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
const locationRoutes = require("./location-routes.js");

router.use("/locations", locationRoutes);

/* EXPORTS */
module.exports = router;
