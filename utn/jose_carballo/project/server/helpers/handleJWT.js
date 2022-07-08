const jwt = require('jsonwebtoken');
const {secretKey, expiresInJWT} = require("../config/hash");

exports.getJsonWebToken = (userData)=>{
    return jwt.sign(userData,secretKey,{ expiresIn: expiresInJWT });
}

exports.getPayloadData = (token)=>{
    return jwt.verify(token, secretKey);
}
