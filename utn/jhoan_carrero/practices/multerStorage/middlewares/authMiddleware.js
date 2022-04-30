const { getPayloadData } = require("../helpers/handleJWT");

const authMiddleware = async (req, res, next) => {

    try {        
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

        // const email = userData.email;
        // const user = await userModel.findOne({ where: { email } });

        req.user = userData;

        return next();

    } catch (error) {
        return res.redirect("/login");
    }

}

module.exports = {
    authMiddleware
}