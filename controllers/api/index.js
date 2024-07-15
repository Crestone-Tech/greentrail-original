/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
const locationRoutes = require("./location-routes.js");
<<<<<<< HEAD
const eventRoutes = require("./event-routes.js");
const eventSeriesRoutes = require("./eventSeries-routes.js");

router.use("/locations", locationRoutes);
router.use("/events", eventRoutes);
router.use("/eventSeries", eventSeriesRoutes);
=======
const communityRoutes= require('./community-routes.js');
const userRoutes = require("./user-routes");

router.use("/locations", locationRoutes);
router.use("/users", userRoutes);
router.use('/communities', communityRoutes)
>>>>>>> 7d2287f4fb65a3cfd855561c89bc7aefc0e6bf95

/* EXPORTS */
module.exports = router;
