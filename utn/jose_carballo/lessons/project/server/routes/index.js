const express = require("express");
const router = express.Router();
const {getUsers, createUser, putAvatar} = require("../controllers/userController");
const { authLogin }= require("../controllers/authController");
// const {authMiddleware} = require("../middlewares/authMiddleware");
// const uploadMiddleware = require("../middlewares/uploadMiddleware");


module.exports = () => {
    // routes users
    router.get("/api",getUsers);
    router.post("/api/v1/auth/register",createUser);
    router.post("/api/v1/auth/login",authLogin);
    
    return router;
}
