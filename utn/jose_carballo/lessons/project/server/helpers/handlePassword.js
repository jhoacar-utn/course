const bcrypt = require("bcrypt");


exports.getHashedPassword = async (plainPassword)=>{

    const saltRounds = parseInt(process.env.SALT_ROUNDS_BCRYPT || 10);

    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    
    return hashedPassword;
}

exports.comparePassword = (plainPassword, hashedPassword) => bcrypt.compareSync(plainPassword, hashedPassword);

