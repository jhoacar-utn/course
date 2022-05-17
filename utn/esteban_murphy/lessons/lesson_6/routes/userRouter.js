const express = require("express");
const router = express.Router();

const {getUsers} = require("../controllers/userController"); //método get user

router.get("/",getUsers);

module.exports = router;
