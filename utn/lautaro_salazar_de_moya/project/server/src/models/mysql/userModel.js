const { DataTypes } = require('sequelize');

const sequelize = require("../../../config/mysql/connection");

const UserSchema = {
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
    unique: true
  },
  image: {
    type: DataTypes.STRING,
  },

};

console.log(`Using MySql's model`);

const User = sequelize.define('User', UserSchema, { tableName: 'users' });

const Find = async () => {
  return await User.findAll({});
};

const FindOne = async (objectToFind) => {
  return await User.findOne({ where: objectToFind });
};

const Create = async (objectToCreate) => {
  return await User.create(objectToCreate);
};

const Update = async (dataToUpdate, objectToFind) => {
  return await User.update(dataToUpdate, { where: objectToFind });
};

User.Find = Find;
User.FindOne = FindOne;
User.Create = Create;
User.Update = Update;


module.exports = User;

