import { Router } from "express";
import registerValidator from "../../../middleware/validators/registerValidator.js";
import checkValidationResult from "../../../middleware/validators/checkValidationResult.js";
import handleRegister from "../../../controllers/registerController.js";

const registerRouter = Router();

registerRouter.post(
  "/",
  registerValidator,
  checkValidationResult,
  handleRegister
);

export default registerRouter;
