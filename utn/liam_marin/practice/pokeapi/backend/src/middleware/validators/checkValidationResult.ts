import type { NextFunction, Request, Response } from "express";

import { validationResult } from "express-validator";

export function checkValidationResult(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    res
      .status(400)
      .json({ message: "Malformed request.", errors: errors.array() });
  }
}
