const jwt = require('jsonwebtoken');
const { jwtSecretKey, jwtExpire }=require('../../config/jwt');

const tokenSign = async(user) => {
    const sign = await jwt.sign(user, jwtSecretKey,
        {
            expiresIn: jwtExpire
        });
    return sign
};

const tokenVerify = async(token) => {
    try {
        return jwt.verify(token, jwtSecretKey);
    }
    catch(e){
        return null;
    };
};

module.exports ={
    tokenSign,
    tokenVerify
}