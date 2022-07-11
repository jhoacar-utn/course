const bcrypt = require('bcrypt');

module.exports.encrypt = async(stringPass)=>{
    const saltRounds = parseInt(process.env.SALT);
    const cryptedKey = await bcrypt.hash(stringPass, saltRounds);
    
    return cryptedKey;
};

module.exports.compare = async(stringPass, cryptedKey)=>{
    const result = await bcrypt.compare(stringPass, cryptedKey);

    return result;
};