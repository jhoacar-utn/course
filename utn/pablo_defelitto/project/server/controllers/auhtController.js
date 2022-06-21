const userModel = require("../models/userModel");
const {comparePassword} = require("../helpers/handlePassword");
const {getJsonWebToken} = require("../helpers/handleJWT");
const { setCookie } = require("../helpers/handleCookie");

const handleLogin = async (req,res,next)=>{
    
    try{

        const {email, password} = req.body;

        const user = await userModel.findOne({ where: { email } });

        if(!user){
            res.status(401);
            return res.json({error:"User not registered"});
        }

        const isAuthorized = await comparePassword(password,user.password);

        if(!isAuthorized){
            res.status(401);
            return res.json({error:"User not authorized"});
        }

        const payload = {
            email: user.email,
            name: user.name
        }
        const token = getJsonWebToken(payload);

        setCookie(req,token);

        console.log(token);
        return res.json({message:"Logueado"});
    
    }catch(error)
    {
        console.log(error);
        res.status(500);
        return res.json({error});
    }
}

module.exports ={
    handleLogin
}