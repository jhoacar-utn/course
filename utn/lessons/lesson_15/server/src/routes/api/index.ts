import { Request, Response, Router } from "express";
import authRouter from './auth';

const router = Router();

router.get("/", (req: Request, res: Response) => {
    return res.send("Estoy en la api");
})

router.use("/auth", authRouter);

export default router;