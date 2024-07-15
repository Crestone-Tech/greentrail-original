/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
const locationRoutes = require("./location-routes.js");
const eventRoutes = require("./event-routes.js");
const eventSeriesRoutes = require("./eventSeries-routes.js");

router.use("/locations", locationRoutes);
router.use("/events", eventRoutes);
router.use("/eventSeries", eventSeriesRoutes);
const communityRoutes= require('./community-routes.js');
const userRoutes = require("./user-routes");

router.use("/locations", locationRoutes);
router.use("/users", userRoutes);
router.use('/communities', communityRoutes)

/* EXPORTS */
module.exports = router;
