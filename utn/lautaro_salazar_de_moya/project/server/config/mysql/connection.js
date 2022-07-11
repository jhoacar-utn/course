const { mysql } = require("../connections");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(mysql.uri);

module.exports = sequelize;