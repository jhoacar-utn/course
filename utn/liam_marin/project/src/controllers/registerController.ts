import type { Request, Response } from "express";

import bcrypt from "bcrypt";
import bcryptConfig from "../config/bcrypt.js";
import User from "../models/user.js";

async function handleRegister(req: Request, res: Response) {
  const { name, email, password, avatar } = req.body;

  if (!(await User.checkEmailAvailable(email))) {
    res.status(400).json({
      error: "EMAIL_EXISTS",
      detail: "E-mail is already in use.",
      status: 400,
    });
    return;
  }

  if (!(await User.checkAvatarAvailable(avatar))) {
    res.status(400).json({
      error: "AVATAR_UNAVAILABLE",
      detail: "Avatar is already in use.",
      status: 400,
    });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, bcryptConfig.saltCost);
  const user = User.buildUser({
    name,
    email,
    password: hashedPassword,
    avatar,
  });
  await user.saveUser();

  res.status(201).json({
    message: "User created.",
    status: 201,
    body: { name, createdAt: new Date().toJSON() },
  });
}

export default handleRegister;
