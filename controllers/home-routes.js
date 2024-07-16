/* DEPENDECIES */
const router = require("express").Router();
// Import authentication middleware

const { Community, Site, Country, Province, Town } = require("../models");
// Import models

/* ROUTES */
/* Get request for homepage */
router.get("/", async (req, res) => {
  try {
    // Render
    res.render("home", {
      loggedIn: req.session.loggedIn,
      darkText: false,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request for location page, gets all locations */
router.get("/locations", async (req, res) => {
  try {
    dbLocationData = await Country.findAll({
      include: [
        {
          model: Province,
          attributes: ["province_name", "country_id"],
          include: [
            {
              model: Town,
                  attributes: ["town_name", "province_id"],
            },
          ],
        },
      ],
    });
    // console.log(dbLocationData);
    const countries = dbLocationData.map((country) =>
      country.get({ plain: true })
    );
    // Render
    res.render("locations", {
      countries,
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request for community page by name */
router.get("/community/:name", async (req, res) => {
  try {
    // Get community info
    const communityData = await Community.findOne({
      where: { community_name: req.params.name },
      include: [{ model: Site, model: Town }],
    });

    // Ensure we have found a community
    if (!communityData) {
      res.status(404).json({ message: "No such town exists as community" });
    }
    const community = communityData.get({ plain: true });

    // Render page
    res.render("community", {
      community,
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    console.log(err);
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
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* EXPORTS */
module.exports = router;
