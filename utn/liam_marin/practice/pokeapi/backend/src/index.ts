import express from "express";
import config from "./config/express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(config.root, routes);

export default app;
