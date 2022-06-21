import type { NextFunction, Request, Response } from "express";

import jsonwebtoken from "jsonwebtoken";
import config from "../config/token.js";

function checkToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ message: "Unauthorized." });
    return;
  }

  jsonwebtoken.verify(
    token,
    config.secret,
    { algorithms: ["HS256"] },
    (err, decoded) => {
      if (err || decoded === undefined || typeof decoded === "string") {
        res.status(400).json({ message: "Invalid Authorization header." });
      } else {
        res.locals["token"] = decoded;
        next();
      }
    }
  );
}

export default checkToken;
