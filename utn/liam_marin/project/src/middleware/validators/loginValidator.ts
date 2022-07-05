import expressValidator from "express-validator";

const loginValidator = [
  expressValidator
    .body("email")
    .exists({ checkNull: true })
    .withMessage("E-mail is missing.")
    .bail()
    .isEmail()
    .withMessage("E-mail is invalid.")
    .normalizeEmail(),
  expressValidator
    .body("password")
    .exists({ checkNull: true })
    .withMessage("Password is missing."),
];

export default loginValidator;
