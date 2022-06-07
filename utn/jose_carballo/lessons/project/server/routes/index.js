const express = require("express");
const router = express.Router();
const {getUsers, createUser, getAvatars, getProfile} = require("../controllers/userController");
const { authLogin }= require("../controllers/authController");
const {validateJWT} = require('../helpers/validate-jwt');


module.exports = () => {
    // routes users
    router.get("/api/v1/users",getUsers);
    router.get("/api/v1/user/avatar",getAvatars);
    router.post("/api/v1/user/profile",[validateJWT],getProfile);
    router.post("/api/v1/auth/register",createUser);
    router.post("/api/v1/auth/login",authLogin);
    
    return router;
}
