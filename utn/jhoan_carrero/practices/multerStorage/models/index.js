const { engine, MONGO } = require("../config/database");

let connection = "mysql";
switch (engine) {
    case MONGO:
        connection = "mongo"; break;
    default:
        connection = "mysql"; break;
}

const userModel = require(`./${connection}/userModel`);

module.exports = {
    userModel
}