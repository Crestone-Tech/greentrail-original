const Community = require("./Community");
const { Event, EventSeries } = require("./Event");
const { Country, Province, Town, Site } = require("./Location");
const Provider = require("./Provider");
const ProviderTag = require("./ProviderTag");
const Tag = require("./Tag");
const Traveler = require("./Traveler");
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

Event.hasOne(Community, {
  foreignKey: "community_id",
  onDelete: "CASCADE",
});

Community.hasMany(Event, {
  foreignKey: "community_id",
  onDelete: "CASCADE",
});

module.exports = {
  Community,
  Country,
  Event,
  EventSeries,
  Provider,
  Province,
  Site,
  Town,
  Traveler,
};
