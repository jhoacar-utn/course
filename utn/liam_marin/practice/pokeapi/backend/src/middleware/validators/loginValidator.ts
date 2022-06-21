import { body } from "express-validator";

const loginValidator = [
  body("email").notEmpty().withMessage("E-mail is empty."),
  body("password").notEmpty().withMessage("Password is empty."),
];

export default loginValidator;
