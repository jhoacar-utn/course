const express = require("express");
const router = express.Router();

const {getWelcomePage, getRegisterPage,getYoutubePage,getloginPage} = require("../controllers/webController");

router.get("/",getWelcomePage);
router.get("/register",getRegisterPage);
router.get("/youtube",getYoutubePage);
router.get("/login",getloginPage);


module.exports = router;
