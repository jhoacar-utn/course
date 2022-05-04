const bcrypt = require('bcrypt');

const getHashedPassword = async (plainPassword)=> {
    const saltRounnds = parseInt( process.env.SALT_ROUNDS_BCRYP) || 10
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounnds)
    return hashedPassword; 
}

const comparePasword = async (plainPassword, hashPassword)=>{
    const result = await bcrypt.compare(plainPassword, hashPassword);
    return result ;
}

module.exports = {
    getHashedPassword,
    comparePasword
}