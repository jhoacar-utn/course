module.exports = {
    mysql:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    mongo:{
    },
    secretKey: process.env.SECRET_KEY || 'myUltraSecretKey',
    expiresInJWT : process.env.EXPIRE_JWT || '24h',
    nameCookie :  process.env.NAME_COOKIE || 'token',
    expiresInCookie: process.env.EXPIRE_COOKIE ||  24 * 60 * 60 * 1000, // 24 hours
    cookieSecretKey: process.env.COOKIE_SECRET_KEY || 'cookieSecretKey',

}