const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Location extends Model{}

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
        modelName: 'location'
    },
);
// Subclasses of location, 
//Country,
//Province/state
//Town/City

class Country extends Location{}

Country.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        country_name:{ 
            type: DataTypes.STRING,
            allowNull: false,
            verification:{
                isAlpha: true,
            }

        },
    }, 
    {
        sequelize, 
        tiemstamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: 'country'

    }

);

class Province extends Location{}

Province.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        province_name: {
           type: DataTypes.STRING, 
           allowNull: false,
           verification: {
            isAlpha: true,
           }
        },
        country_id:{
            type: DataTypes.INTEGER,
            unique: false,
            references:{
                model: 'country',
                key: 'id'
            },

        },
    },
    {
        sequelize, 
        tiemstamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: 'province'
    },
);

class Town extends Location{}

Town.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        city_name:{
            type: DataTypes.STRING,
            verification:{
                isAlpha: true,
            },
        },
        country_id: {
            type: DataTypes.INTEGER,
            unique: false,
            references: {
                model: 'country', 
                key: 'id'
            }
        },
        province_id:{
            type: DataTypes.INTEGER,
            unique: false,
            references: {
                model: 'province',
                key:'id'
            }
        }
    },
    {
        sequelize, 
        tiemstamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: 'town'
    }
);
class Site extends Location {}
Site.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true
        },
        site_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isAlpha: true,
            },
        },
        town_id: {
            type: DataTypes.INTEGER,
            unique:false,
            references:{
                model:'town',
                key:'id'
            }

        },
        street_address: {
            type:DataTypes.STRING,
            allowNull: false,
            
        },
        latitude: {
            type: DataTypes.INTEGER,

        },
        longitude: {
            type: DataTypes.INTEGER,
        },
        map_link:{
            type: DataTypes.STRING,
            
        }, 
        community_id: {
            type: DataTypes.INTEGER,
            unique: false,
            references: {
                model: 'community',
                key:'id',
            },
        },

    },
)



module.exports = {Country, Province, Town, Site};