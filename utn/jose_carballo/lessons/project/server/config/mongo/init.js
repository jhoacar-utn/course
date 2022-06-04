const mongoConection = require('./connection');

const initDatabase = async () => {

    try {
        await mongoConection;
        console.log("Connection with mongo enabled");
    } catch (error) {
        console.log("Error connection", error);
    }
}


module.exports = initDatabase;