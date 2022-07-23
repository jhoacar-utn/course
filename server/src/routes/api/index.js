const express = require("express");
const auth = require("./auth");

const router = express.Router();

router.get("/",(req,res)=>{
    return res.json({
        message: "Estoy en la api"
    });
});

router.use("/auth", auth);

router.use("/",(req,res)=>{
    return res.status(404).json({
        error: "Not found in /api/v1"
    });
})

module.exports = router;