/* DEPENDENCIES */
const Sequelize = require("sequelize");
require("dotenv").config();

/* SEQUELIZE */
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL, {
      hooks: {
        beforeDefine: function (columns, model) {
          model.tableName = `${process.end.DB_NAME}_${model.name.singluar}`;
        },
      },
    })
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "postgres",
      }
    );

/* EXPORTS */
module.exports = sequelize;
