const initDatabase = async () => {

    try {
        const response = await require("./connection");
        if(response.status === 200)
            console.log("Connection with api enabled");
        else
            console.log("Connection not enabled")
    } catch (error) {
        console.log("Error connection", error);
    }
}


module.exports = initDatabase;