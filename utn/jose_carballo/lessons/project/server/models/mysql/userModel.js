const { DataTypes } = require("sequelize");
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
    allowNull: false,
    unique: true,
  },
  image: {
    type: DataTypes.STRING,
  },
};
console.log("Using model user with mysql");
const User = sequelize.define("User", UserSchema, { tableName: "users" });

const customFindOne = async (objectToFind) => await User.findOne({ where: { email: objectToFind } });

const customFind = async () =>  await User.findAll();

const customFindById = async (id) => await User.findByPk(id);

const customFindNameAvatar = async (obj) => await User.findOne({ where: { avatar: obj }});

const customFindEmail = async (obj) => await User.findOne({ where: { email: obj }});

const customCreate = async (objectToCreate) => await User.create(objectToCreate);

const customUpdate = async (dataToUpdate, objectToFind) => await User.update(dataToUpdate, { where: objectToFind });

User.customFind = customFind;
User.customFindById = customFindById;
User.customFindOne = customFindOne;
User.customFindNameAvatar = customFindNameAvatar;
User.customFindEmail = customFindEmail;
User.customCreate = customCreate;
User.customUpdate = customUpdate;

module.exports = User;
