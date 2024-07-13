const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const {TABLES } = require('./Constants');
class Location extends Model {}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "location",
  }
);
// Subclasses of location,
//Country,
//Province/state
//Town/City

class Country extends Location {}

Country.init(
  {
    // id is inherited
    country_name: {
      type: DataTypes.STRING,
      allowNull: false,
      verification: {
        isAlpha: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "country",
  }
);

class Province extends Location {}

Province.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    province_name: {
      type: DataTypes.STRING,
      allowNull: false,
      verification: {
        isAlpha: true,
      },
    },
    country_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: TABLES.COUNTRY,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "province",
  }
);

class Town extends Location {}

Town.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    city_name: {
      type: DataTypes.STRING,
      verification: {
        isAlpha: true,
      },
    },
    province_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: TABLES.PROVINCE,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tiemstamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "town",
  }
);
class Site extends Location {}
Site.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    site_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    town_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: TABLES.TOWN,
        key: "id",
      },
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.INTEGER,
    },
    longitude: {
      type: DataTypes.INTEGER,
    },
    map_link: {
      type: DataTypes.STRING,
    },
// Commented until Community is created
    // community_id: {
    //   type: DataTypes.INTEGER,
    //   unique: false,
    //   references: {
    //     model: "community",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    tiemstamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "site",
  }
);

module.exports = { Country, Province, Town, Site };
