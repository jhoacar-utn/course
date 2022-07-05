const express = require("express");
//import { Request, Response, Router } from "express";
const authRouter = require("./auth");
const userRouter = require("./user");

const router = express.Router();

router.get("/", (req, res) => {
    return res.send("Estoy en la api..");
})

router.use("/auth", authRouter);
router.use("/user", userRouter);

module.exports = router;