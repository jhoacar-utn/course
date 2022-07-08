const { User } = require("../models");

const getAvatars = async (req, res,next) => {
        
    try{
        const avatars = await User.customFindAll();

        console.log(avatars);

        return res.json({
            message: "Lista de Avatars en la base de datos",
            body: { avatars }
            });
    

    } catch (error) {   
        console.log(error);
        res.status(500);
        return res.json({ error });

    }

}

const getProfile = async (req, res, next) => {
    
    try{

        const userData = req.body;

        const profile = await User.customFindOne({ email : userData.email });

        //aca me devuelve error cuando quiero traer los datos del usuario logueado de la base de datos
        //donde le especifico que busque por el email... aparece siempre  error	{}

        return res.json({
            message: "Perfil del Usuario logueado",
            body: { profile }
            });
    

    } catch (error) {
        console.log(error);
        res.status(500);
        return res.json({ error });

    }

}

module.exports = {
    getAvatars, getProfile
}