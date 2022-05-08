const express = require("express");
const router = express.Router();

const {getWelcomePage, getRegisterPage,getYoutubePage} = require("../controllers/webController");

router.get("/",getWelcomePage);
router.get("/register",getRegisterPage);
router.get("/youtube",getYoutubePage);

module.exports = router;