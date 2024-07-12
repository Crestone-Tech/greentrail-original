const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Provider extends Model {}

Provider.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  site_id: {
    type: DataTypes.INTEGER,
  },
});

module.exports = { Provider };
