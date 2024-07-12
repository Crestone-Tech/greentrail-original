const { Model, Datatypes } = require("sequelize");
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
    name: {
      type: Datatypes.STRING,
      allowNull: false,
      verification: {
        isAlpha: true,
      },
    },
    date: {
      type: Datatypes.RANGE(Datatypes.DATE),
      allowNull: false,
      verification: {
        isDate: true,
      },
    },
    // add location (site) reference here
    category: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    description: {
      type: Datatypes.TEXT,
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
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_series_name: {
      type: Datatypes.STRING,
      allowNull: false,
      verification: {
        isAlpha: true,
      },
    },
    event_id: {
      type: Datatypes.INTEGER,
      unique: false,
      references: {
        model: "event",
        key: "id",
      },
    },
    // add location (site) reference here
    date: {
      type: Datatypes.RANGE(Datatypes.DATE),
      allowNull: false,
      verification: {
        isDate: true,
      },
    },
    description: {
      type: Datatypes.TEXT,
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
