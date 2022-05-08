const sequelize = require("../config/mysql/connection.js");
const { DataTypes } = require('sequelize');



const User = sequelize.define('User', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password : {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
    tableName: 'users'
});



module.exports = User;