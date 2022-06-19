import type { Request, Response } from "express";

import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import bcryptConfig from "../config/bcrypt";
import tokenConfig from "../config/token";
import User from "../models/user";

export async function registerController(req: Request, res: Response) {
  const { name, email, password, avatarId } = req.body;

  if (!(await User.checkEmailAvailable(email))) {
    res.status(400).json({ error: "E-mail address is already in use." });
    return;
  }

  if (!(await User.checkAvatarAvailable(avatarId))) {
    res.status(400).json({ error: "Avatar is already in use." });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, bcryptConfig.saltCost);
  const user = User.createUser({
    name,
    email,
    password: hashedPassword,
    avatarId,
  });
  await user.saveUser();
  res.status(201).json({ message: "User created successfully." });
}

export async function loginController(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await User.findUser(email);
  if (user === null || !(await bcrypt.compare(password, user.password))) {
    res.status(400).json({ error: "E-mail or password are incorrect." });
    return;
  }

  res.status(201).json({
    message: "Logged in successfully.",
    body: { token: jsonwebtoken.sign({ email }, tokenConfig.secret) },
  });
}
