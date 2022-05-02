const { userModel } = require("@models/index");
const { comparePassword } = require("@utils/handlePassword");
const { getJsonWebToken } = require("@utils/handleJWT");
const { setCookie } = require("@utils/handleCookie");

const handleLogin = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        const user = await userModel.first({email});

        if (!user) {
            res.status(401);
            return res.json({ error: "User not registered" });
        }
        console.log(user);

        const isAuthorized = await comparePassword(password, user.password);

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