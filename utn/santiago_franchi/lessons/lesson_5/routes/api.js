const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter")

const {getDocApi} = require("../controllers/apiController")

router.use("/user", userRouter)
//router.get("/",handleRequest);

router.get("/",getDocApi);

module.exports = router;