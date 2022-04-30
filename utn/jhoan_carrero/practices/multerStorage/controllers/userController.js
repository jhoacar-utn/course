const userModel = require("../models/userModel");

const { getHashedPassword } = require("../helpers/handlePassword");
const { response } = require("express");

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

const saveAvatar = async (req, res, next) => {

    try {

        const email = req.user.email;

        const pathFile = req.file.filename;
        const pathAvatar = `/users/${pathFile}`;

        await userModel.update(
            { avatar: pathAvatar },
            { where: { email } }
        )
        
        return res.redirect("/dashboard");

    } catch (error) {
        console.log(error)
        res.status(500);
        res.json({ error: error });
    }
}

module.exports = {
    getUsers,
    postUser,
    saveAvatar,
};