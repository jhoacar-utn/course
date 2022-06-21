import app from "./index";
import config from "./config/express";

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
