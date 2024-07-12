const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model{}

Location.init(
    {
        id: {
            type: DataTypes.INTEGER, 
        }
    }
)