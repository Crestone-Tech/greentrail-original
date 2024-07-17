/* DEPENDENCIES */
const path = require("path");
const express = require("express");
const session = require("express-session");
const { logDBConnectionDetails } = require("./utils/helper");
const handlebarshelp = require("./utils/handlebars-helper");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

/* EXPRESS SESSION */
const sess = {
  secret: "Group 3 ROCKS",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

/* HANDLEBARS */
console.log("handlebarshelp", handlebarshelp);
const hbs = exphbs.create({
  helpers: handlebarshelp,
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

/* MIDDLEWARE */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

/* SEQUELIZE */
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    logDBConnectionDetails();
    console.log(`Now listening at http://localhost:${PORT}/`);
  });
});
