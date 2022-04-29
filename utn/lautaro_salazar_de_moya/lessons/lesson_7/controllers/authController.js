
const authModel = require("../models/userModel");

const { getHashedPassword } = require("../helpers/handlePassword");


const postAuth = async (req,res,next)=>{
    try{
        const userData = req.body;
        console.log(userData);

        const email = await userModel.findOne({ where: { email:userData.email } });
        console.log(email);
        return res.json({user:email});
    }
    catch(error){
        console.log(error)
        res.status(500);
        res.json({error:error});
    }
}

module.exports = {
    postAuth
};