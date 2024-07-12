const { Model, DataTypes }= require('sequelize');
const sequelize = require('../config/connection');

class Traveler extends Model{}

Traveler.init