import { Router } from "express";

import avatarRoute from "./avatar";

const route = Router();

route.use("/avatar",avatarRoute);

export default route;
