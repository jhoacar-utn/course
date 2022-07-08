const { userModel } = require("../models");
const { getHashedPassword } = require("../helpers/handlePassword");
const { comparePassword } = require("../helpers/handlePassword");
const { getJsonWebToken, getPayloadData } = require("../helpers/handleJWT");

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.customFindOne( { email } );
        if (!user) {
            res.status(400);
            return res.json({ error: "Credenciales incorrectas" });
        }
        const isAuthorized = comparePassword(password, user.password);
        if (!isAuthorized) {
            res.status(400);
            return res.json({ error: "Credenciales incorrectas" });
        }
        const payload = {
            email: user.email,
            name: user.name
        }
        /*
            Fijate del token que estas generando
            tienes un payload con {email, name } unicamente
            es decir, que cuando se decodifique este
            jsonwebtoken solo se obtendra un objeto
            con estos dos campos!!!
         */
        const token = getJsonWebToken(payload);
        //setCookie(req, token);
        return res.status(200).json({
            message:"Logueado satisfactoriamente",        
            body:{               
                token : token
            }        
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        return res.json({ error });
    }
}
const registerUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const {email} = userData;
        /**
            Deberias hacer una validacion del body de la request,
            es una mala practica confiarte de todo lo que venga
            desde el cliente del frontend, porque puede añadir campos
            de mas o campos de menos, entonces tu como backend
            debes perseveras la solides en tus sistemas.
         */
        console.log(userData)
        if (await userModel.customFindOne( { email}  )) {
            res.status(400);
            return res.json({ error: "El Personaje ya se encuentra registrado " });
        }
       
        userData.password = await getHashedPassword(userData.password);
        if(!userData.image) {userData.image = "/users/default.png";}        

        const user = await userModel.customCreate(userData);

        const payload = {
            email: user.email,
            name: user.name
        }
        const token = getJsonWebToken(payload);
         
        return res.status(200).json({
            message:"Creado satisfactoriamente",        
            body:{
                name : user.name ,
                createdAt : user.createdAt,
                token : token
            }        
        });

    } catch (error) {
        console.log(error)
        res.status(500);
        res.json({ message:"El Personaje ya se encuentra registrado", error: error });
    }
}
const getUsers = (req, res, next) => {
    const userData = req.query;
    return res.json(userData);
}
const getAvatars = async (req,res,next)=>{
    try{
        const avatars = await userModel.getAvatars();
        console.log(avatars)
        return res.status(200).json({
            message:"Lista de avatars en la base de datos",        
            body:  avatars 
        });
} catch (error) {
    console.log(error);
    res.status(500);
    return res.json({error});
}
}

const getProfile = async (req,res,next)=>{
    
    try {
        const { token } = req.query;
        console.log(token);
        if (!token) {
            res.status(400);
            return res.json({ error: "Token incorrecto" });
        }
        /*
        Esta payload data deberia ser la misma que genero con el token
        por lo tanto aca la propiedad { password } sera undefined
        esto debido a que tu generaste previamente un jsonwebtoken
        con solo los campos { name, email }, por lo tanto aca
        nunca va a estar autorizado         
        */
        const {email, password} = getPayloadData(token);
        const user = await userModel.customFindOne( { email } );

        if (!user) {
            res.status(401);
            return res.json({ error: "Token incorrecto" });
        }

        const isAuthorized = comparePassword(password, user.password);

        if (!isAuthorized) {
            res.status(401);
            return res.json({ error: "Token incorrecto" });
        }
        //setCookie(req, token);

        return res.status(200).json({
            message:"Logueado satisfactoriamente",        
            body:{
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                image: user.image
            }        
        });

    } catch (error) {
        console.log(error);
        res.status(500);
        return res.json({error: "Token incorrecto"});
    }
}

const putAvatar = async (req, res, next) => {
    try {
        const avatarFile = req.avatarPath;
        const userEmail = req.user.email;

        await userModel.customUpdate({ avatar: avatarFile }, { email: userEmail });

        return res.redirect("/dashboard");

    } catch (error) {
        console.log(error)
        res.status(500);
        return res.json({ error: error });
    }
}


module.exports = {
    getUsers,
    putAvatar,
    loginUser,
    registerUser,
    getAvatars,
    getProfile
}