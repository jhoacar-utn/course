const { mysql } = require("@config/database");
const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  port: mysql.port,
  dialect: 'mysql'
});

const handleStartDatabase = async () => {

  require("@models");

  try {

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    //await sequelize.sync();
    console.log("All models were synchronized successfully.");

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


module.exports = sequelize;
module.exports.initDatabase = handleStartDatabase;