const bcrypt = require("bcrypt");


const getHashedPassword = async (plainPassword)=>{

    const saltRounds = process.env.SALT_ROUNDS_BCRYPT || 10;

    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    
    return hashedPassword;
}

const comparePassword = async (plainPassword, hashedPassword) =>{
    
    const result = await bcrypt.compare(myPlaintextPassword, hash);

    return result;
}


module.exports = {
    getHashedPassword,
    comparePassword
}
