import { body } from "express-validator";
import { checkValidationResult } from "./checkValidationResult";

const loginValidator = [
  body("email").notEmpty().withMessage("E-mail is empty."),
  body("password").notEmpty().withMessage("Password is empty."),
  checkValidationResult,
];

export default loginValidator;
