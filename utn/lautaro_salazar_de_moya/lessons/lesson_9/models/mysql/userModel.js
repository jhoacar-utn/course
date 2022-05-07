const { DataTypes } = require('sequelize');

const sequelize = require("../../config/mysql/connection");


const User = sequelize.define('User', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar : {
    type: DataTypes.STRING,
  },

}, {
    tableName: 'users'
});



module.exports = User;

