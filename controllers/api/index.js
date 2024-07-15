/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
const locationRoutes = require("./location-routes.js");
const communityRoutes= require('./community-routes.js');
const userRoutes = require("./user-routes");

router.use("/locations", locationRoutes);
router.use("/users", userRoutes);
router.use('/communities', communityRoutes)

/* EXPORTS */
module.exports = router;
