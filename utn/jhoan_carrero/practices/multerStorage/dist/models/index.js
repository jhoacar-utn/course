"use strict";

const {
  engine,
  MONGO,
  MYSQL
} = require("../config/database");

let userModel;

switch (engine) {
  case MONGO:
    userModel = require("./mongo/userModel");
    break;

  case MYSQL:
    userModel = require("./mysql/userModel");
    break;

  default:
    throw "Engine database must be specified, only can be 'mysql' and 'mongodb'";
}

module.exports = {
  userModel
};