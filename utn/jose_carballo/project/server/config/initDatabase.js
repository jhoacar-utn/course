const { dbConnection, MYSQL, MONGO } = require("./database");

let connection;

switch (dbConnection) {
  case MYSQL:
    connection = require("./mysql/init");
    break;
  case MONGO:
    connection = require("./mongo/init");
    break;
  default:
    throw `Must be specified DB_CONNECTION environment variable, and can be: ${MYSQL}, ${MONGO}`;
}

module.exports = connection;
