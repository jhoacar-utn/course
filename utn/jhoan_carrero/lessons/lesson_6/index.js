require('dotenv').config();
const express = require("express");
const handleStartServer = require('./helpers/handleStartServer');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const routerApi = require("./routes/api");
const routerWeb = require("./routes/web");

app.use("/api",routerApi);
app.use("/",routerWeb);

const PORT = process.env.PORT || 4001 ;

app.listen(PORT,handleStartServer);