const express = require("express");
const router = express.Router();
const { resolve } = require ("path");
const static = require("express");


const clientFolder = resolve(__dirname + "/../../../../client/build");

router.use("/", static(clientFolder));

router.use("/*", (req , res) => {
    return res.sendFile(clientFolder + "/index.html");
})

module.exports= router;