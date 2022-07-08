const bcrypt = require("bcrypt");


const getHashedPassword = async (plainPassword)=>{

    const saltRounds = parseInt(process.env.SALT_ROUNDS_BCRYPT || 10);

    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    
    return hashedPassword;
}

const comparePassword = async (plainPassword, hashedPassword) =>{
    
    /*
        No deberias controlar los errores aca
        porque ya lo haria el controlador, entonces
        fijate que solo sea este metodo el encargado
        de comunicarse con bcrypt
    */
    try{
        const result = await bcrypt.compare(plainPassword, hashedPassword);
        return result;
    }catch(error){return error;}
}

module.exports = {
    getHashedPassword,
    comparePassword
}
