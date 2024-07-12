const Traveler = require("./Traveler");
const Event = require("./Event");
const {Country, Province, Town, Site} = require('./Location')

// Event.belongsTo(Location, {});

module.exports = { Traveler, Event, Country, Province, Town, Site};
