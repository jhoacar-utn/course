const express = require("express");

const { getDatabaseAvatars, getProfile } = require("../../controllers/user");

const router = express.Router();

router.get("/avatar",getDatabaseAvatars);
router.get("/profile",getProfile);

module.exports = router;