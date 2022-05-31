import { Request, Response, Router, static as Static } from "express";
import { resolve } from "path";

const router = Router();

const clientFolder = resolve(__dirname + "/../../../../client/build");

router.use("/", Static(clientFolder));

router.use("/*",(req,res)=>{
    return res.sendFile(clientFolder+"/index.html");
})

export default router;