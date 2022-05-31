const mongoose = require('mongoose');

const { mongo } = require("@config/database");

const handleStartDatabase = async () => {
    try {
        await mongoose.connect(mongo.uri);
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports.initDatabase = handleStartDatabase;