import { body } from "express-validator";

const registerValidator = [
  body("username")
    .exists({ checkNull: true })
    .withMessage("Username field is missing.")
    .trim()
    .isLength({ min: 2, max: 32 })
    .withMessage("Username must be between 2 and 32 characters.")
    .isAlphanumeric(undefined, { ignore: "-_." })
    .withMessage(
      "Username may only contain numbers, letters, hyphens, dots and underscores."
    ),
  body("displayname")
    .optional({ nullable: true })
    .trim()
    .notEmpty()
    .withMessage("Display name is empty.")
    .isLength({ max: 32 })
    .withMessage("Display name must be 32 characters or shorter."),
  body("email")
    .exists({ checkNull: true })
    .withMessage("E-mail field is missing.")
    .isEmail()
    .withMessage("E-mail is invalid.")
    .normalizeEmail(),
  body("password")
    .exists({ checkNull: true })
    .withMessage("Password field is missing.")
    .isLength({ min: 8, max: 72 })
    .withMessage("Password must be between 8 and 72 characters."),
  body("avatarId")
    .exists({ checkNull: true })
    .withMessage("Avatar ID field is missing.")
    .isInt({ min: 1, max: 151 })
    .withMessage("Avatar ID must be between 1 and 151.")
    .toInt(),
];

export default registerValidator;
