const express = require("express");
const router = express.Router();

const {getProfile, getAvatars} = require ('../../controllers/userController')

router.get("/avatar", getAvatars);
router.get("/profile", getProfile);


module.exports = router;