import { Request, Response, Router } from "express";

const router = Router();

router.get("/",(req:Request, res:Response)=>{
    return res.send("Estoy en la api");
})

export default router;