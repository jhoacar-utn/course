import type { Request, Response } from "express";

import User from "../models/user.js";

async function getProfile(_req: Request, res: Response) {
  const token = res.locals["token"];
  const user = await User.findUser(token.email);
  if (!user) {
    res.status(400).json({
      error: "INVALID_TOKEN",
      detail: "User specified in token was not found.",
      status: 400,
    });
    return;
  }

  res.status(200).json({
    message: "Basic user data.",
    status: 200,
    body: {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
  });
}

export default getProfile;
