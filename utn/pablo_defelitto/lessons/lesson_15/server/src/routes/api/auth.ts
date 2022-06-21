import { Request, Response, Router } from "express";

const router = Router();

router.post("/login", (req: Request, res: Response) => {

    const { email, password } = req.body;

    if (email !== "test@test.com")
        return res.json({
            error: "user not registered"
        });

    if (password !== "test")
        return res.json({
            error: "password incorrect"
        });
    
    return res.json({
        message:"user login succesfully",
        body:{
            token : "tu token"
        }
    });

});


export default router;