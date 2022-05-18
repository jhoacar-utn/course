import { Router } from "express";

import { getAllAvatars, postAvatar } from "../controllers/avatar";

const route = Router();

route.get("/",getAllAvatars);
route.post("/",postAvatar);

export default route;