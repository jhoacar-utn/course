module.exports = {
    
    secretKey: process.env.SECRET_KEY || 'myUltraSecretKey',
    expiresInJWT : process.env.EXPIRE_JWT || '1h',

}