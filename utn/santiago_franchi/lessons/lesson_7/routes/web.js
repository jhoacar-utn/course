const express = require("express");
const router = express.Router();

const {getWelcomePage, getRegisterPage,getYoutubePage} = require("../controllers/webController")

//get login page

router.get("/", getWelcomePage)
router.get("/register",getRegisterPage)
router.get("/youtube",getYoutubePage)

module.exports = router;