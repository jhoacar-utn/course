module.exports = {
    dbConnection: process.env.DB_CONNECTION,
    MYSQL: 'mysql',
    MONGO: 'mongodb',
    mysql:{
        uri: process.env.DB_MYSQL_URI,
    },
    mongo:{
        uri: process.env.DB_MONGO_URI,
    }
}