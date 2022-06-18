const express = require("express");
const router = express.Router();
const userRoute =require("./userRoute");

router.use("/auth/register", userRoute)

module.exports = router;