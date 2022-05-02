const express = require("express");
const router = express.Router();

const {getWelcomePage, getRegisterPage , getLoginPage ,getYoutubePage, getDashboardPage} = require("@controllers/webController");
const {handleLogin} = require("@controllers/authController");
const {authMiddleware} = require("@middlewares/authMiddleware");

router.get("/",getWelcomePage);

router.get("/login",getLoginPage);
router.post("/login",handleLogin);

router.get("/register",getRegisterPage);
router.get("/youtube",getYoutubePage);

router.get("/dashboard",authMiddleware,getDashboardPage);

module.exports = router;
