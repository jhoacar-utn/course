import { Router } from "express";
import v1Router from "./v1/index.js";

const apiRouter = Router();

apiRouter.use("/v1", v1Router);
apiRouter.use("*", (_req, res) => {
  res.status(404).json({
    error: "NOT_FOUND",
    detail: "Not found.",
    status: 404,
  });
});

export default apiRouter;
