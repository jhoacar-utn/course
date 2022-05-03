const { userModel } = require("@models/index");
const { comparePassword } = require("@utils/handlePassword");
const { getJsonWebToken } = require("@utils/handleJWT");
const { setCookie } = require("@utils/handleCookie");

const handleLogin = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        const user = await userModel.first({ email });

        let error;

        if (!user) {
            error = "User not registered";
            return res.redirect(encodeURI(`/login/?error=${error}`));
        }

        const isAuthorized = await comparePassword(password, user.password);

        if (!isAuthorized) {
            error = "User not authorized";
            return res.redirect(encodeURI(`/login/?error=${error}`));
        }

        const payload = user;
        const token = getJsonWebToken(payload);

        setCookie(req, token);

        return res.redirect('/dashboard');

    } catch (error) {
        console.log(error);
        error = JSON.stringify(error);
        return res.redirect(encodeURI(`/login/?error=${error}`));
    }
}

const handleLogout = (req, res, next) => {

    req.session = null;
    return res.redirect("/");
}

module.exports = {
    handleLogin,
    handleLogout,
}