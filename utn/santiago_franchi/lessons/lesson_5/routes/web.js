const express = require("express");
const router = express.Router();

const {getWelcomePage, getRegisterPage} = require("../controllers/webController")



router.get("/", getWelcomePage)
router.get("/register",getRegisterPage)

module.exports = router;