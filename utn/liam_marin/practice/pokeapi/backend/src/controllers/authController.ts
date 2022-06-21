import type { Request, Response } from "express";

import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import bcryptConfig from "../config/bcrypt.js";
import tokenConfig from "../config/token.js";
import User from "../models/user.js";

export async function registerController(req: Request, res: Response) {
  const { username, displayname, email, password, avatarId } = req.body;

  if (!(await User.checkUsernameAvailable(username))) {
    res.status(400).json({ message: "Username is already in use." });
    return;
  }

  if (!(await User.checkEmailAvailable(email))) {
    res.status(400).json({ message: "E-mail address is already in use." });
    return;
  }

  if (!(await User.checkAvatarAvailable(avatarId))) {
    res.status(400).json({ message: "Avatar is already in use." });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, bcryptConfig.saltCost);
  const user = User.createUser({
    username,
    displayname,
    email,
    password: hashedPassword,
    avatarId,
  });
  await user.saveUser();
  res.status(201).json({ message: "User created successfully." });
}

export async function loginController(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await User.findByEmail(email);
  if (user === null || !(await bcrypt.compare(password, user.password))) {
    res.status(400).json({ message: "E-mail or password are incorrect." });
    return;
  }

  jsonwebtoken.sign(
    { username: user.username, email: user.email },
    tokenConfig.secret,
    { algorithm: "HS256" },
    (err, encoded) => {
      if (err || encoded === undefined) {
        res.status(500).json({ message: "Failed to sign token." });
        return;
      }

      res
        .status(201)
        .json({ message: "Account created.", body: { token: encoded } });
    }
  );
}
