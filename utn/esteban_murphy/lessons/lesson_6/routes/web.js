const express = require("express");
const router = express.Router();

const {getWelcomePage} = require("../controllers/webController");

router.get("/",getWelcomePage);

module.exports = router;
