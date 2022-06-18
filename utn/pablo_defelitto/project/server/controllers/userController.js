const userModel = require("../models/userModel");
const { getHashedPassword } = require("../helpers/handlePassword");


const postUser = async (req,res,next)=>{
    try{
        const userData = req.body;
        
        userData.password = await getHashedPassword(userData.password);

        const user = await userModel.create(userData);

        console.log(userData)

        return res.json({user:user});
    } catch(error)
    {
        console.log(error)
        res.status(500);
        res.json({error:error});
    }
}
    
module.exports.postUser = postUser;