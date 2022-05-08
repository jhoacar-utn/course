"use strict";

const {
  engine,
  MONGO,
  MYSQL
} = require("./database");

let connection;

switch (engine) {
  case MONGO:
    connection = require("./mongo/connection");
    break;

  case MYSQL:
    connection = require("./mysql/connection");
    break;

  default:
    throw "Engine database must be specified, only can be 'mysql' and 'mongodb'";
}

const {
  initDatabase
} = connection;
module.exports = {
  initDatabase
};