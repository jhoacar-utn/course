const express = require("express");
const router = express.Router();

const {getUsers, postUser} = require("../controllers/userController");
const {postAuth} = require("../controllers/authController")

router.get("/",getUsers);
router.post("/",postUser);
router.post("/",postAuth);


module.exports = router;
