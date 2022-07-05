import path from "node:path";
import cors from "cors";
import express, { Router } from "express";
import apiRouter from "./api/index.js";
import expressConfig from "../config/express.js";

const router = Router();

router.use("/api", cors(), express.json(), apiRouter);

if (expressConfig.frontendDir) {
  const frontendDir = expressConfig.frontendDir;
  router.use(express.static(frontendDir));
  router.get("*", (_req, res) => {
    res.sendFile(path.resolve(frontendDir, "index.html"));
  });
}

export default router;
