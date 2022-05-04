const req = require("express/lib/request");
const { comparePasword } = require("../helpers/handlePassword");
const userModel = require("../models/userModel");

const handleLogin = async (req, res, next) =>{
      
    const {email, password} = req.body;
    const user = await userModel.findOne({where: {email : email}});

    if(!user){
        res.status(401);
        return res.json({error: "Error"})
    }
    const isAuthorized = comparePasword(password, user.password);
    if(!isAuthorized){
        res.status(401);
        return res.json({error: "Error"})
    }
    return res.json({user:"Usuario autorizado"})

};

module.exports = handleLogin;