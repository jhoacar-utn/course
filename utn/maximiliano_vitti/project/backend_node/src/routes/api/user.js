const express = require("express");

const { getAvatars, getProfile } = require("../../controllers/user");

const router = express.Router();

router.get("/avatar",getAvatars);
router.get("/profile",getProfile);

module.exports = router;