const userModel = require("../models/userModel");
const comparePassword = require("../helpers/handlePassword");

const handleLogin = async (req,res,next)=>{
    
    try{

        const {email, password} = req.body;

        const user = await userModel.findOne({ where: { email } });

        if(!user){
            res.status(401);
            return res.json({error:"User not registered"});
        }

        const isAuthorized = comparePassword(password,user.password);

        if(!isAuthorized){
            res.status(401);
            return res.json({error:"User not authorized"});
        }

        return res.json({user:"User authenticated"});
    
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