const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Provider extends Model {}

Provider.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      verification: {
        isAlpha: true,
      },
    },
    community_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "community",
        key: "id",
      },
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "site",
        key: "id",
      },
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false,
      verification: {
        isAlpha: true,
      },
    },
    // Add provider tag(s) reference(s) here
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "provider",
  }
);

module.exports = { Provider };
