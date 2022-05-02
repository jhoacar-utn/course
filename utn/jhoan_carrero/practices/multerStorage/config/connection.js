const { engine, MONGO } = require("./database");

let connection = "mysql";
switch (engine) {
    case MONGO:
        connection = "mongo"; break;
    default:
        connection = "mysql"; break;
}

const { initDatabase } = require(`./${connection}/connection`);

module.exports = {
    initDatabase
}