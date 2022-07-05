import type { Request, Response } from "express";

import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import jwtConfig from "../config/jwt.js";
import User from "../models/user.js";

async function handleLogin(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await User.findUser(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(400).json({
      error: "WRONG_CREDENTIALS",
      detail: "E-mail or password are incorrect.",
      status: 400,
    });
    return;
  }

  jsonwebtoken.sign(
    { name: user.name, email: user.email },
    jwtConfig.secret,
    { algorithm: "HS256" },
    (_err, encoded) => {
      if (!encoded) {
        res.status(500).json({
          error: "CANT_SIGN_TOKEN",
          detail: "Failed to sign login token.",
          status: 500,
        });
        return;
      }

      res.status(201).json({
        message: "Logged in successfully.",
        status: 201,
        body: {
          token: encoded,
        },
      });
    }
  );
}

export default handleLogin;
