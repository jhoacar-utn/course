const express = require("express");
const router = express.Router();
const {handleLogin} = require("../controllers/auhtController");

router.post("/", handleLogin);


module.exports = router;