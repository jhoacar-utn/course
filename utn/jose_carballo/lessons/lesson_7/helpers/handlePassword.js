const bcrypt = require("bcrypt");


exports.getHashedPassword = async (plainPassword)=>{

    const saltRounds = parseInt(process.env.SALT_ROUNDS_BCRYPT || 10);

    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    
    return hashedPassword;
}

exports.comparePassword = async (plainPassword, hashedPassword) =>{
    
    const result = await bcrypt.compare(plainPassword, hashedPassword);

    return result;
}
