const express = require("express");
const router = express.Router();
const userRoute =require("./userRoute");
const authRoute = require("./loginRoute");

router.use("/auth/register", userRoute);
router.use("/auth/login",authRoute);

module.exports = router;