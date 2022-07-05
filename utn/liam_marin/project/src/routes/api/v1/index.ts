import { Router } from "express";
import avatarRouter from "./avatar.js";
import loginRouter from "./login.js";
import profileRouter from "./profile.js";
import registerRouter from "./register.js";

const v1Router = Router();

v1Router
  .use("/auth/register", registerRouter)
  .use("/auth/login", loginRouter)
  .use("/user/avatar", avatarRouter)
  .use("/user/profile", profileRouter);

export default v1Router;
