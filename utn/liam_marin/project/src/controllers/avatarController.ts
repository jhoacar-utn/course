import type { Request, Response } from "express";

import User from "../models/user.js";

async function getAvatars(_req: Request, res: Response) {
  const avatars = await User.getAvatars();
  res.status(200).json({
    message: "All avatars currently in use.",
    status: 200,
    body: avatars,
  });
}

export default getAvatars;
