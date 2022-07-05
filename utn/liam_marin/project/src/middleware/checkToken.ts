import type { NextFunction, Request, Response } from "express";

import jsonwebtoken from "jsonwebtoken";
import jwtConfig from "../config/jwt.js";

async function checkToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({
      error: "UNAUTHORIZED",
      detail: "Unauthorized.",
      status: 401,
    });
    return;
  }

  jsonwebtoken.verify(
    token,
    jwtConfig.secret,
    { algorithms: ["HS256"] },
    (_err, decoded) => {
      if (decoded === undefined || typeof decoded === "string") {
        res.status(400).json({
          error: "INVALID_TOKEN",
          detail: "Could not verify login token.",
          status: 400,
        });
        return;
      }

      res.locals["token"] = decoded;
      next();
    }
  );
}

export default checkToken;
