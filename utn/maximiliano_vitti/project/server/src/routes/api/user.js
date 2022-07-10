const express = require("express");
const { getDatabaseAvatars, getUserData } = require("../../controllers/user");

const router = express.Router();

router.get("/avatar",getDatabaseAvatars);
router.get("/profile",getUserData);

module.exports = router;