/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
const homeRoutes = require("./home-routes.js");
// const locationRoutes = require("./location-routes.js");
//const apiRoutes = require("./api");

router.use("/", homeRoutes);
// router.use("/locations", locationRoutes);
//router.use("/api", apiRoutes);

/* EXPORTS */
module.exports = router;
