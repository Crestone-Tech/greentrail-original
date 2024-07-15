const Community = require("./Community");
const { Event, EventSeries } = require("./Event");
const { Country, Province, Town, Site,  } = require("./Location");
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

Country.hasMany(Province, {
  foreignKey: 'country_id',
  onDelete: 'CASCADE'
});

Province.belongsTo(Country, {
  foreignKey: 'country_id'
});

Province.hasMany(Town, {
  foreignKey: 'province_id', 
  onDelete: 'CASCADE'
});

Town.belongsTo(Province, {
  foreignKey:'province_id'
});

Town.hasOne(Community, {
  foreignKey:'town_id', 
  onDelete: 'CASCADE'
});
Community.belongsTo(Town, {
  foreignKey:'town_id'

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
