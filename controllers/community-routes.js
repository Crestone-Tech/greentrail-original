/* DEPENDECIES */
const router = require("express").Router();
// Import authentication middleware
// Import models

/* ROUTES */
/* Get request for homepage, gets all posts */
router.get("/community", async (req, res) => {
  try {
    // Render
    res.render("community", {
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* EXPORTS */
module.exports = router;