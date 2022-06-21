import { Router } from "express";
import {
  loginController,
  registerController,
} from "../../controllers/authController.js";
import checkValidationResult from "../../middleware/validators/checkValidationResult.js";
import registerValidator from "../../middleware/validators/registerValidator.js";
import loginValidator from "../../middleware/validators/loginValidator.js";

const router = Router();

router.post(
  "/register",
  registerValidator,
  checkValidationResult,
  registerController
);
router.post("/login", loginValidator, checkValidationResult, loginController);

export default router;
