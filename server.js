/* DEPENDENCIES */
require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const helper = require("./utils/helper");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("./config/passport");

const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

/* EXPRESS SESSION */
const sess = {
  secret: process.env.EXPRESS_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

/* HANDLEBARS */
const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

/* MIDDLEWARE */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

/* OAUTH */
app.use(passport.initialize());
app.use(passport.session());

/* Route to start OAuth2 authentication */
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login", "email"],
  })
);

/* Callback route for OAuth2 authentication */
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication
    console.log(req.user);
    req.session.save(() => {
      req.session.loggedIn = true;
      res.redirect("/locations");
    });
  }
);

/* SEQUELIZE */
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    helper.logDBConnectionDetails();
    console.log(`Now listening at http://localhost:${PORT}/`);
  });
});
