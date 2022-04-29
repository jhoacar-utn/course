const express = require("express");
const router = express.Router();

const {getWelcomePage, getRegisterPage , getLoginPage ,getYoutubePage} = require("../controllers/webController");

const {handleLogin} = require("../controllers/authController");


router.get("/",getWelcomePage);

router.get("/login",getLoginPage);
router.post("/login",handleLogin);

router.get("/register",getRegisterPage);
router.get("/youtube",getYoutubePage);

module.exports = router;
