import { Request, Response, Router, static as Static } from "express";
import { resolve } from "path";

const router = Router();

const clientFolder = resolve(__dirname + "/../../../../client/build");

router.use("/", Static(clientFolder));

export default router;