import express from "express";
import config from "./config/express.js";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(config.root, routes);

export default app;
