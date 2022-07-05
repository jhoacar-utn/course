import { Router } from "express";
import getAvatars from "../../../controllers/avatarController.js";

const avatarRouter = Router();

avatarRouter.get("/", getAvatars);

export default avatarRouter;
