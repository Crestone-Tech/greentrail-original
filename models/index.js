const Location = require("./Location");
const Traveler = require("./Traveler");
const Event = require("./Event");

Event.belongsTo(Location, {});

module.exports = { Location, Traveler, Event };
