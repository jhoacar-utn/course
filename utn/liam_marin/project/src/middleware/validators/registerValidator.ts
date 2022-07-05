import expressValidator from "express-validator";

const registerValidator = [
  expressValidator
    .body("name")
    .exists({ checkNull: true })
    .withMessage("Name is missing.")
    .bail()
    .trim()
    .isLength({ min: 2, max: 32 })
    .withMessage("Name must be between 2 and 32 characters."),
  expressValidator
    .body("email")
    .exists({ checkNull: true })
    .withMessage("E-mail is missing.")
    .bail()
    .isEmail()
    .withMessage("E-mail is invalid.")
    .bail()
    .normalizeEmail(),
  expressValidator
    .body("password")
    .exists({ checkNull: true })
    .withMessage("Password is missing.")
    .bail()
    .isLength({ min: 8, max: 255 })
    .withMessage("Password must be between 8 and 255 characters."),
  expressValidator
    .body("avatar")
    .exists({ checkNull: true })
    .withMessage("Avatar is missing.")
    .bail()
    .isInt({ min: 1, max: 151 })
    .withMessage("Avatar must be a number between 1 and 151.")
    .toInt(),
];

export default registerValidator;
