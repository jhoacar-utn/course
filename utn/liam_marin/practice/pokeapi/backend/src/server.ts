import app from "./index.js";
import config from "./config/express.js";

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
