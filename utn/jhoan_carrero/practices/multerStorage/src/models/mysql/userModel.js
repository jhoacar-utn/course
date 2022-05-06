const { DataTypes } = require('sequelize');

const sequelize = require("@config/mysql/connection");


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
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'users'
});

const customFindOne = async (objectQuery) => {
  return await User.findOne({ where: objectQuery, raw: true });
};

const customUpdateOne = async (objectUpdate, objectQuery) => {
  return await User.update(objectUpdate, { where: objectQuery });
}

//User.prototype.first = customFindOne; //when new instance is created
User.first = customFindOne; //when is defined a function
User.updateFirst = customUpdateOne;

module.exports = User;

