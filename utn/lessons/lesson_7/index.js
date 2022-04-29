require('dotenv').config();
const express = require("express");
const cookieSession = require('cookie-session')
const handleStartServer = require('./helpers/handleStartServer');
const {nameCookie,expireInCookie} = require("./config/config");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieSession({name: nameCookie,keys:[], maxAge: expireInCookie}));

const routerApi = require("./routes/api");
const routerWeb = require("./routes/web");

app.use("/api",routerApi);
app.use("/",routerWeb);

const PORT = process.env.PORT || 4001 ;

app.listen(PORT,handleStartServer);