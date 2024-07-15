/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
const locationRoutes = require("./location-routes.js");
const userRoutes = require("./user-routes");

router.use("/locations", locationRoutes);
router.use("/users", userRoutes);

/* EXPORTS */
module.exports = router;
