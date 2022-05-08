const express = require("express");
const router = express.Router();

const {getUsers, postUser, putAvatar}= require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware")

router.get("/",getUsers);
router.post("/",postUser);
router.post("/avatar", authMiddleware , putAvatar);

module.exports = router;