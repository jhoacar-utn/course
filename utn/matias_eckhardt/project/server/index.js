require("dotenv").config();
const handleStartServer = require("./helpers/handleStartServer");
const PORT = process.env.PORT || 4000;
const app = require("./app");

app.listen(PORT, handleStartServer);
