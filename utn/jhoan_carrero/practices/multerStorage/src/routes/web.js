const express = require("express");
const router = express.Router();

const { getWelcomePage, getRegisterPage, getLoginPage, getYoutubePage, getDashboardPage } = require("@controllers/webController");
const { handleLogin, handleLogout } = require("@controllers/authController");
const { authMiddleware } = require("@middlewares/authMiddleware");

router.get("/", authMiddleware, getWelcomePage);

router.get("/login", authMiddleware, getLoginPage);
router.post("/login", handleLogin);
router.post("/logout",handleLogout);

router.get("/register", authMiddleware, getRegisterPage);
router.get("/youtube", authMiddleware, getYoutubePage);

router.get("/dashboard", authMiddleware, getDashboardPage);

module.exports = router;
