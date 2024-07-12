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
    },
    date: {
      type: Datatypes.RANGE(Datatypes.DATE),
    },
    // add reference to location here
    category: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    description: {
      type: Datatypes.TEXT("long"),
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

EventSeries.init();

module.exports = { Event, EventSeries };
