const express = require("express");
const auth = require("./auth");
const userRoute = require("./user");

const router = express.Router();

router.get("/",(req,res)=>{  //use sobreescribe todas las entradas que ponga... //get es mejor
    return res.send("Estoy en la api");
});

router.use("/auth", auth);
router.use("/user",userRoute);

//si no apunto a ninguna ruta de las de arriba viene aca y retorna el error
router.use("/*",(req,res) => {
    return res.status(404).json({
        error: "Not found"
    });
})

module.exports = router;

