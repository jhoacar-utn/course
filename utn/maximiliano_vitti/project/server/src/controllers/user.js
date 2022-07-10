const { User } = require("../models");

const getDatabaseAvatars = async (req, res,next) => {
        
    try{

        const avatars = await User.customFindAll();

        console.log(avatars);

        //me trae un array del tipo  body	"[{\"avatar\":\"wartortle\"},{\"avatar\":\"wartortle\"},{\"avatar\":\"squirtle\"}]"
        //no se como solucinarlo para que quede " body ":[" Avatar 1", " Avatar 2",...]
        return res.json({
            message: "Lista de Avatars en la base de datos",
            body: JSON.stringify(avatars)
            });
    

    } catch (error) {   
        console.log(error);
        res.status(500);
        return res.json({ error });

    }

}

const getUserData = async (req, res) => {

    try{

        const {UserData} =  req.query;
        
        console.log(UserData);

        //const profile = await User.customFindOne({ email :email });

        //console.log(profile);

        return res.json({
            message: "Perfil del Usuario logueado",
            body: {UserData} 
        });
    

    } catch (error) {
        console.log(error);
        res.status(500);
        return res.json({ error });

    }

}

module.exports = {
    getDatabaseAvatars, getUserData
}