const express = require("express");
const router = express.Router();
const auhtRegister =require("./authRegister");

router.get("/auth/register", auhtRegister)
router.use("/", (req,res,next)=>{
    console.log("funciona");
    return res.send("tambien funciona");
    
    
})

module.exports = router;