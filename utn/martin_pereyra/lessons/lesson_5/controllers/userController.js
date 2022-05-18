
const getUsers = (req,res,next)=>{
    return res.send("All users");
}

const postUser = (req,res,next)=>{
    //traemos la info del usuario que viaja desde la req del body
    const userData = req.body;
    //como lo que estoy trajendo es un objeto (de datos del cliente) uso Json
    return res.json(userData); //express no lee por defecto no lee por defecto el body. Hay que especificarlo en index.js  (hora 2 clase 5)
}

module.exports.getUsers = getUsers;
module.exports.postUser = postUser;