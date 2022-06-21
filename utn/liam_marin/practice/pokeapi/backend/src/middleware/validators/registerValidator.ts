import { body } from "express-validator";
import { checkValidationResult } from "./checkValidationResult";

const registerValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is empty.")
    .isLength({ max: 72 })
    .withMessage("Name must be 72 characters or less."),
  body("email").isEmail().withMessage("E-mail is invalid.").normalizeEmail(),
  body("password")
    .isLength({ min: 8, max: 72 })
    .withMessage("Password must be between 8 and 72 characters."),
  body("avatar")
    .isInt({ min: 1, max: 151 })
    .withMessage("Avatar ID must be between 1 and 151.")
    .toInt(),
  checkValidationResult,
];

export default registerValidator;
