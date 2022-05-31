const { userModel } = require("@models/index");
const { getHashedPassword } = require("@utils/handlePassword");

const getUsers = (req, res, next) => {

    const userData = req.query;

    return res.json(userData);
}

const postUser = async (req, res, next) => {

    try {

        const userData = req.body;

        userData.password = await getHashedPassword(userData.password);
        userData.avatar = '/users/default.png';

        await userModel.create(userData);
        const message = "User Registered successfully";

        return res.redirect(encodeURI(`/register/?message=${message}`));

    } catch (error) {

        console.log(error);
        error = JSON.stringify(error);
        return res.redirect(encodeURI(`/register/?error=${error}`));
    }
}

const saveAvatar = async (req, res, next) => {

    try {

        const email = req.user.email;

        const pathAvatar = req.avatarFile;

        await userModel.updateFirst(
            { avatar: pathAvatar },
            { email }
        );
        const message = "User avatar updated succesfully";
        return res.redirect(encodeURI(`/dashboard/?message=${message}`));

    } catch (error) {
        console.log(error)
        error = JSON.stringify(error);
        res.redirect(encodeURI(`/dashboard/?error=${error}`));
    }
}

module.exports = {
    getUsers,
    postUser,
    saveAvatar,
};