const { dbConnection, MYSQL, MONGO } = require("../../config/connections");

let userModel;

switch (dbConnection) {
    case MYSQL:
        userModel = require("./mysql/userModel"); break;
    case MONGO:
        userModel = require("./mongo/userModel"); break;
    default:
        throw `Must be specified DB_CONNECTION environment variable, and can be: ${MYSQL}, ${MONGO} or ${API}`;
}

module.exports = {
    userModel
}