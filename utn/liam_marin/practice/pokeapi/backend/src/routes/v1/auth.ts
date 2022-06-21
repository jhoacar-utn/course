import { Router } from "express";
import {
  loginController,
  registerController,
} from "../../controllers/authController";
import checkValidationResult from "../../middleware/validators/checkValidationResult";
import registerValidator from "../../middleware/validators/registerValidator";
import loginValidator from "../../middleware/validators/loginValidator";

const router = Router();

router.post(
  "/register",
  registerValidator,
  checkValidationResult,
  registerController
);
router.post("/login", loginValidator, checkValidationResult, loginController);

export default router;
