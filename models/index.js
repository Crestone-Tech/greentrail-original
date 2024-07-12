const Traveler = require("./Traveler");
const { Event, EventSeries } = require("./Event");
const { Country, Province, Town, Site } = require("./Location");
const Provider = require("./Provider");
const ProviderTag = require("./ProviderTag");
const Tag = require("./Tag");

// Event.belongsTo(Location, {});

Provider.belongsToMany(Tag, {
  through: {
    model: ProviderTag,
    unique: false,
  },
});

Tag.belongsToMany(Provider, {
  through: {
    model: ProviderTag,
    unique: false,
  },
});

module.exports = {
  Traveler,
  Event,
  EventSeries,
  Country,
  Province,
  Town,
  Site,
  Provider,
};
