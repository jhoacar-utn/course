const sequelize = require("../config/mysql/connection");

const handleStartServer = async function(){
    console.log("Server had been started on port ",this.address().port);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ alter: true });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = handleStartServer;