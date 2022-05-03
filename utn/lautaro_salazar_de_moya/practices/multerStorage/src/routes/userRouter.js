const express = require("express");
const router = express.Router();

const { getUsers, postUser, saveAvatar } = require("@controllers/userController");
const uploadMiddleware = require("@middlewares/uploadMiddleware");
const { authMiddleware } = require("@middlewares/authMiddleware")

router.get("/", getUsers);
router.post("/", postUser);
router.post("/avatar", authMiddleware, uploadMiddleware.single("avatarFile"), saveAvatar);

module.exports = router;
