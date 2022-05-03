const bcrypt = require("bcrypt");
const { saltRounds } = require("@config/hash");

const getHashedPassword = async (plainPassword) => {

    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    return hashedPassword;
}

const comparePassword = async (plainPassword, hashedPassword) => {

    const result = await bcrypt.compare(plainPassword, hashedPassword);

    return result;
}


module.exports = {
    getHashedPassword,
    comparePassword
}
