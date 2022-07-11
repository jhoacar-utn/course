const { dbConnection, MYSQL, MONGO } = require("./connections");

let connection;

switch (dbConnection) {
    case MYSQL:
        connection = require("./mysql/init"); break;
    case MONGO:
        connection = require("./mongo/init"); break;
    default:
        throw `You have to define the DB CONNECTIONs value into environment variables. It must be: mysql or mongodb`
}

module.exports = connection;