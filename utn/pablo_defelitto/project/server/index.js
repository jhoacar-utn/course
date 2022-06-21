require("dotenv").config();
const cookieSession = require('cookie-session');
const express = require("express");

const cors = require("cors");
const handleStartServer = require("./helpers/handleStartServer");
const {nameCookie,expireInCookie,cookieSecretKey} = require("./config/config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieSession({name: nameCookie,keys:[cookieSecretKey], maxAge: expireInCookie}));

app.use(cors());

const routerApi = require("./routes/api");
app.use("/api/v1",routerApi);


const PORT =process.env.PORT || 4000;

app.listen(PORT,handleStartServer);


