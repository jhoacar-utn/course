const express = require("express");
const router = express.Router();
const {postUser} = require("../controllers/registerController");

router.post("/", postUser);


module.exports = router;