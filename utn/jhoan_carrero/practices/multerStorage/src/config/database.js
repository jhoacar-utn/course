module.exports = {
    MYSQL: "mysql",
    MONGO: "mongodb",
    engine: process.env.DB_CONNECTION || this.MYSQL, 
    mysql:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    mongo:{
        uri: process.env.DB_URI
    },
}