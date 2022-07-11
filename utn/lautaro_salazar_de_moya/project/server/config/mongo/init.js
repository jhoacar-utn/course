const initDatabase = async () => {

    try {
        await require("./connection");
        console.log("the connection to the MONGO database has been established");
    }
    catch (error) {
        console.log("We have a problem: error ->", error);
    }
}


module.exports = initDatabase;