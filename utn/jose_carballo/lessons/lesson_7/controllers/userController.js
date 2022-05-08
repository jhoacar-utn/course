const userModel = require("../models/userModel");

const { getHashedPassword } = require("../helpers/handlePassword");

exports.getUsers = (req,res,next)=>{

    const userData = req.query;

    return res.json(userData);
}

exports.postUser = async (req,res,next)=>{
    
    try{

        const userData = req.body;

        console.log(userData);

        userData.password = await getHashedPassword(userData.password);

        const user = await userModel.create(userData);

        return res.json({user:user});
    
    }catch(error)
    {
        console.log(error)
        res.status(500);
        res.json({error:error});
    }
}
