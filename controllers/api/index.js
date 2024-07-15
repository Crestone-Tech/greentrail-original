/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
const locationRoutes = require("./location-routes.js");
const communityRoutes= require('./community-routes.js');

router.use('/locations', locationRoutes);
router.use('/communities',communityRoutes)

/* EXPORTS */
module.exports = router;
