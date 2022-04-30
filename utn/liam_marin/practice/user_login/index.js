import url from "node:url";
import express from "express";
import expressHandlebars from "express-handlebars";
import index from "./routes/index.js";
import { express as config } from "./config.js";

const app = express();

const viewDir = new URL("views/", import.meta.url);
app.engine(
  "hbs",
  expressHandlebars.engine({
    extname: ".hbs",
    layoutsDir: url.fileURLToPath(new URL("layouts/", viewDir)),
    partialsDir: url.fileURLToPath(new URL("partials/", viewDir)),
  })
);
app.set("views", url.fileURLToPath(viewDir));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  "/public",
  express.static(url.fileURLToPath(new URL("public/", import.meta.url)))
);
app.use(index);

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
