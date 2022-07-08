const { User } = require("../models");
const { getComparedPassword, getHashedPassword } = require("../helpers/handlePassword");
const { getJsonWebToken } = require("../helpers/handleJWT");

const handleLogin = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password)
        return res.json({error: "Fields required"});
        
    try{
        const user = await User.customFindOne({ email });

        if (!user) {
            res.status(401);
            return res.json({ error: "User not registered" });
        }
    
        const isAuthorized = await getComparedPassword(password, user.password);
    
        if (!isAuthorized) {
            res.status(401);
            return res.json({ error: "Password is not correct" });
        }
    
        const payload = {
            email: user.email,
            name: user.name
        }
    
        const token = await getJsonWebToken(payload);
    
        res.status(201);
        return res.json({
            message: "User login succesfully",
            body: { token }
            });
    
        /*res.redirect("/dashboard")}; */

    } catch (error) {
        console.log(error);
        res.status(500);
        return res.json({ error });

    }

}

const handleRegister = async (req, res) => {
 
    try {
    
        const userData = req.body;

        if (!userData.name || !userData.email || !userData.password || !userData.avatar || !userData.image)
            return res.json({
                error: "Fields required"
            });

        const userReg = await User.customFindOne({ email : userData.email });

        if (userReg) {
            res.status(401);        
            return res.json({ error: "mail is already registered" });
        }
        /*
            El customCreate debera guardar toda la informacion del objeto que reciba
            en el modelo user, y devolvera la misma informacion que guardo
            en un objeto
        */
            const avatarIsUsed = await User.customFindOne({ avatar : userData.avatar });

            if (avatarIsUsed) {
                res.status(401);        
                return res.json({ error: "Avatar is already used. Please chose another one" });
            }
    

        userData.password =  await getHashedPassword(userData.password);

        const user = await User.customCreate(userData);

        // delete user.password;
        user.password = undefined;

        res.status(201);
        return res.json({
            message: "User registered. Please Login with the same credentials.",
            body: user
        });

    } catch (error) {
        res.status(401);
        return res.json({
            error
        })
    }

}

module.exports = {
    handleLogin,
    handleRegister
}