const { getPayloadData } = require("../helpers/handleJWT");
const userModel = require("../models/userModel");

const authMiddleware = async (req, res, next) => {

    const token = req.session.userToken;

    if (!token) {
        res.status(403);
        return res.json({ error: "Token is required" });
    }

    const userData = getPayloadData(token);

    if (!userData) {
        res.status(403);
        return res.json({ error: "Token is invalid" });
    }

    const email = userData.email;
    const user = await userModel.findOne({ where: { email } });

    req.user = user;

    return next();

}

module.exports = {
    authMiddleware
}