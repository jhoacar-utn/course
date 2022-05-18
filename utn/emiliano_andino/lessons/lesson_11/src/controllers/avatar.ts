import { Request, Response, NextFunction } from "express";

interface Avatar{
    name:String,
    image:String
}

export const getAllAvatars = (req: Request, res: Response, next: NextFunction) => {

    const avatars: Avatar[] = [{
        name: "Avatar",
        image: "/avatar/default-image.png"
    }];

    return res.json(avatars);
}

export const postAvatar = (req: Request, res: Response, next: NextFunction) => {

    const avatar:Avatar = req.body;


    return res.json({
        message: "Avatar loaded"
    })

}