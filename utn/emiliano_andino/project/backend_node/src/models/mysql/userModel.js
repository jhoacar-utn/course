const { DataTypes } = require('sequelize');

const sequelize = require("../../config/mysql/connection");

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
  },
  image: {
    type: DataTypes.STRING,
  }
};

console.log("Using model user with mysql");

const User = sequelize.define('User', UserSchema, { tableName: 'users' });

const customFindOne = async (objectToFind) => {
  return await User.findOne({ where: objectToFind });
};

const customCreate = async (objectToCreate) => {
  return await User.create(objectToCreate);
};

const customUpdate = async (dataToUpdate, objectToFind) => {
  return await User.update(dataToUpdate, { where: objectToFind });
};

const getAvatars = async() => {
  const avatars= await User.findAll()
  return  avatars.map(e=> e.avatar)
};

User.customFindOne = customFindOne;
User.customCreate = customCreate;
User.customUpdate = customUpdate;
User.getAvatars = getAvatars;


module.exports = User;

