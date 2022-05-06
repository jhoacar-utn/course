const { engine, MONGO, MYSQL } = require("@config/database");

let connection;
switch (engine) {
    case MONGO:
        connection = require('@config/mongo/connection'); break;
    case MYSQL:
        connection = require('@config/mysql/connection'); break;
    default:
        throw "Engine database must be specified, only can be 'mysql' and 'mongodb'";
}

const { initDatabase } = connection;

module.exports = {
    initDatabase
}