/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

/* EXPORTS */
module.exports = router;
