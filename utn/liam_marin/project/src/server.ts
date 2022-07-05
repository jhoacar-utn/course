import expressConfig from "./config/express.js";
import app from "./index.js";

app.listen(expressConfig.port, () => {
  console.log(`Server running on: http://localhost:${expressConfig.port}`);
});
