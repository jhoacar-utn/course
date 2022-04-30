const userModel = require("../models/userModel");
const { comparePassword } = require("../helpers/handlePassword");
const { getJsonWebToken } = require("../helpers/handleJWT");
const { setCookie } = require("../helpers/handleCookie");

const handleLogin = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({
            where: { email },
            raw: true,
        });

        if (!user) {
            res.status(401);
            return res.json({ error: "User not registered" });
        }

        const isAuthorized = comparePassword(password, user.password);

        if (!isAuthorized) {
            res.status(401);
            return res.json({ error: "User not authorized" });
        }

        const payload = user;
        const token = getJsonWebToken(payload);

        setCookie(req, token);

        return res.redirect("/dashboard");

    } catch (error) {
        console.log(error);
        res.status(500);
        return res.json({ error });
    }
}

module.exports = {
    handleLogin
}