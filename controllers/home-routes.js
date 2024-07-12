/* DEPENDECIES */
const router = require("express").Router();
// Import authentication middleware
// Import models

/* ROUTES */
/* Get request for homepage, gets all posts */
router.get("/", async (req, res) => {
  try {
    // Render
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* EXPORTS */
module.exports = router;
