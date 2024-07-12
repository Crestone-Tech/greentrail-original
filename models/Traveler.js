const { Model, DataTypes }= require('sequelize');
const sequelize = require('../config/connection');

class Traveler extends Model{}

Traveler.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
        }, 
        email: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                isEmail:true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: len[6],
        },


    },
    {
        hooks: {
            beforeCreate: async(newTravelerData) => {
                newTravelerData.password = await bcrypt.hash(newTravelerData.password,10);
                return newTravelerData;
            },
            beforeUpdate: async (updatedTravelerData)=> {
                updatedTravelerData.password =await bcrypt.hash(updatedTravelerData.password,10);
                return updatedTravelerData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'traveler',
    }
);
