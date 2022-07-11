const {mongo} = require("../connections");
const mongoose = require("mongoose");
module.exports = mongoose.connect(mongo.uri);