const express = require("express");
const router = express.Router();

const {getUsers, postUser, putAvatar} = require("../controllers/userController");

const {authMiddleware} = require("../middlewares/authMiddleware");
const uploadMiddleware = require("../middlewares/uploadMiddleware");


router.get("/",getUsers);
router.post("/",postUser);

router.put("/avatar",authMiddleware,uploadMiddleware,putAvatar);

module.exports = router;
