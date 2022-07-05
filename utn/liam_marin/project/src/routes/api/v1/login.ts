import { Router } from "express";
import loginValidator from "../../../middleware/validators/loginValidator.js";
import checkValidationResult from "../../../middleware/validators/checkValidationResult.js";
import handleLogin from "../../../controllers/loginController.js";

const loginRouter = Router();

loginRouter.post("/", loginValidator, checkValidationResult, handleLogin);

export default loginRouter;
