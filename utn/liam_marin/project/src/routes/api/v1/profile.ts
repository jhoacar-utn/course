import { Router } from "express";
import checkToken from "../../../middleware/checkToken.js";
import getProfile from "../../../controllers/profileController.js";

const profileRouter = Router();

profileRouter.get("/", checkToken, getProfile);

export default profileRouter;
