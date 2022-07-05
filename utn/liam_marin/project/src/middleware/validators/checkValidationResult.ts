import type { NextFunction, Request, Response } from "express";

import expressValidator from "express-validator";

async function checkValidationResult(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = expressValidator.validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      detail: "Malformed request body.",
      status: 400,
      errors: errors.array(),
    });
  } else {
    next();
  }
}

export default checkValidationResult;
