const sequelize = require('../config/mysql/connection');

exports.handleStartServer = async() =>{
    
    console.log("Server had been started on port ",this.address().port);

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

};

