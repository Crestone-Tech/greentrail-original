const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {
  //add login verification here
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
      verification: {
        isAlpha: true,
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      verification: {
        isDate: true,
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
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

class EventSeries extends Event {}

EventSeries.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_series_name: {
      type: DataTypes.STRING,
      allowNull: false,
      verification: {
        isAlpha: true,
      },
    },
    event_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: "event",
        key: "id",
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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      verification: {
        isDate: true,
      },
    },
    day_of_week: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "event-series",
  }
);

module.exports = { Event, EventSeries };
