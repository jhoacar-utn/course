
const { Sequelize } = require('sequelize');


const {mysql} = require("../config");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
    host: mysql.host,
    port: mysql.port,
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });
