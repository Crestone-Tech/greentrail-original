/* DEPENDECIES */
const router = require("express").Router();
// Import authentication middleware
// Import models

/* ROUTES */
/* Get request for homepage */
router.get("/", async (req, res) => {
  try {
    // Render
    res.render("home", {
      darkText: false,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request for location page, gets all locations */
router.get("/locations", async (req, res) => {
  try {
    // Render
    res.render("locations", {
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request for community page */
router.get("/", async (req, res) => {
  try {
    // Render
    res.render("community", {
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request for login page */
router.get("/login", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    // Render
    res.render("login", {
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* EXPORTS */
module.exports = router;
