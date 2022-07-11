const { User } = require("../models");
const { comparePassword } = require("../helpers/handlePassword");
const { getHashedPassword } = require("../helpers/handlePassword");
const { getJsonWebToken } = require("../helpers/handleJWT");
const { setCookie } = require("../helpers/handleCookie");


const handleLogin = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password)
        return res.json({
            error: "Fields required"
        });

    const user = await User.customFindOne({ email });

    if (!user)
        return res.json({
            error: "user not registered"
        });

    // compara plain password    
    //if (password !== user.password)
    //    return res.json({
    //        error: "password incorrect"
    //    });

    //const token = "aldasjlkdajskld";
    const isAuthorized = comparePassword(password, user.password);

    if (!isAuthorized) {
        res.status(401);
        return res.json({ error: "User not authorized" });
    }

    const payload = {
        email: user.email,
        name: user.name
    }
    const token = getJsonWebToken(payload);

    setCookie(req, token);


    return res.json({
        message: "user login succesfully",
        body: {
            token
        }
    });
}

const handleRegister = async (req, res) => {

    const { name, email, password, avatar, image } = req.body;

    if (!name || !email || !password || !avatar || !image)
        return res.json({
            error: "Fields required"
        });

    try {

        const hashedPassword = await getHashedPassword(password);

        /*
            El customCreate debera guardar toda la informacion del objeto que reciba
            en el modelo user, y devolvera la misma informacion que guardo
            en un objeto
        */
        const user = await User.customCreate({
            name,
            email,
            //password,
            hashedPassword,
            avatar,
            image
        });

        // delete user.password;
        user.password = undefined;

        return res.json({
            message: "user registered",
            body: user
        })


    } catch (error) {
        return res.json({
            error
        })
    }

}

module.exports = {
    handleLogin,
    handleRegister
}

