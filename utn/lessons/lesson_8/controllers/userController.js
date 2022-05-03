const userModel = require("../models/userModel");

const { getHashedPassword } = require("../helpers/handlePassword");

const getUsers = (req, res, next) => {

    const userData = req.query;

    return res.json(userData);
}

const postUser = async (req, res, next) => {

    try {

        const userData = req.body;

        console.log(userData);

        userData.password = await getHashedPassword(userData.password);

        const user = await userModel.create(userData);

        return res.json({ user: user });

    } catch (error) {
        console.log(error)
        res.status(500);
        res.json({ error: error });
    }
}


const putAvatar = async (req, res, next) => {

    try {

        
        const avatarFile = req.avatarPath;
        const userEmail = req.user.email;

        await userModel.update({ avatar: avatarFile }, {
            where: {
                email: userEmail
            }
        });

        return res.redirect("/dashboard");

    } catch (error) {
        console.log(error)
        res.status(500);
        return res.json({ error: error });
    }
}


module.exports = {
    getUsers,
    postUser,
    putAvatar
}