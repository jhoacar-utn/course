module.exports = {
    
    jwtSecretKey: process.env.JWT_SECRETKEY || 'Secr37.Key',
    jwtExpire: process.env.JWT_EXPIRE || '1h',
}