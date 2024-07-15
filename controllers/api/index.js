/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
const locationRoutes = require("./location-routes.js");
const eventRoutes = require("./event-routes.js");
const eventSeriesRoutes = require("./eventSeries-routes.js");

router.use("/locations", locationRoutes);
router.use("/events", eventRoutes);
router.use("/eventSeries", eventSeriesRoutes);

/* EXPORTS */
module.exports = router;
