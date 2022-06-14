const express = require("express");
const router = express.Router();
const auhtRegister =require("./authRegister");

router.use("/auth/register", auhtRegister)

module.exports = router;