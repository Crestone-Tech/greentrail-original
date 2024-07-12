const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model{
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
            type: Datatypes.RANGE(Datatypes.DATE)



        }   

    })
