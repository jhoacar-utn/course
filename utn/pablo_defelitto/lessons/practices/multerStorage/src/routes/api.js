const express = require("express");
const router = express.Router();

const userRouter = require("@routes/userRouter");

const {getDocApi} = require("@controllers/apiController");


router.use("/user",userRouter);

router.get("/",getDocApi);



module.exports = router;
