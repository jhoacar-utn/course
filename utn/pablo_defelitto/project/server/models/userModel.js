const { DataTypes } = require('sequelize');
const sequelize = require("../config/mysql/connection");

const User = sequelize.define('User', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    
  },
  email: {
    type: DataTypes.STRING,
    allowNull:false
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false
  }
}, {
  // Other model options go here
});


module.exports = User;