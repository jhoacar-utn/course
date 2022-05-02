const { getPayloadData } = require("@utils/handleJWT");

const authMiddleware = async (req, res, next) => {

    try {
        const token = req.session.userToken;

        req.auth = {};

        if (!token) {
            req.auth.error = "Token is required";
            return next();
        }

        const userData = getPayloadData(token);

        if (!userData) {
            req.auth.error = "Token is invalid";
            return next();
        }

        req.user = userData;

        return next();

    } catch (error) {
        req.auth.error = error;
        return next();
    }

}

module.exports = {
    authMiddleware
}