const express = require("express");
const cors = require("cors");

const api = require("../routes/api");
const web = require("../routes/web");

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false})) //habilita el req.query

app.use("/api/v1",api);
app.use("/",web);

module.exports = app;
