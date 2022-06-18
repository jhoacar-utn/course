require("dotenv").config();
const express = require("express");

const cors = require("cors");
const routerApi = require("./routes/api");
const handleStartServer = require("./helpers/handleStartServer");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use("/api/v1",routerApi);


const PORT =process.env.PORT || 4000;

app.listen(PORT,handleStartServer);


