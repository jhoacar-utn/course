const express = require("express");
const router = express.Router();
const userRoute =require("./userRoute");
const authRoute = require("./loginRoute");

router.get("/",(req,res)=>{
   return res.json({
    message: "Estoy en la api"
    })
})
router.use("/auth/register", userRoute);
router.use("/auth/login",authRoute);

router.use("/*",(req,res)=>{
    return res.status(404).json({
        error: "Not found"
    });
});

module.exports = router;