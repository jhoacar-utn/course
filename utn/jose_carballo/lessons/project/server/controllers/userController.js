const {userModel} = require("../models");

const { getHashedPassword } = require("../helpers/handlePassword");

exports.getUsers = async(req,res,next)=>{

    const userData = await userModel.customFind();
    return res.json({msg:'get user',userData});
}

exports.createUser = async (req,res,next)=>{
    try{
        const userData = req.body;
        userData.password = await getHashedPassword(userData.password);
        const user = await userModel.customCreate(userData);
        return res.json({msg:'user create',user:user});
    }catch(error)
    {
        console.log(error)
        res.status(500);
        res.json({error:error});
    }
}

exports.putAvatar = async (req, res, next) => {
    try {
        const avatarFile = req.avatarPath;
        const userEmail = req.user.email;
        await userModel.customUpdate({ avatar: avatarFile },{ email: userEmail});
        return res.redirect("/dashboard");

    } catch (error) {
        console.log(error)
        res.status(500);
        return res.json({ error: error });
    }
}
