require('dotenv').config();
const express = require("express");
const cors = require("cors")
const cookieSession = require('cookie-session');
const handleStartServer = require('./helpers/handleStartServer');
const {nameCookie,expiresInCookie,cookieSecretKey} = require("./config/hash");

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieSession({name: nameCookie,keys:[cookieSecretKey], maxAge: expiresInCookie}));

const routerApi = require("./routes/api");
const routerWeb = require("./routes/web");

app.use("/api/v1",routerApi);
app.use("/",routerWeb);
app.use("/users",express.static(__dirname+"/storage"));

const PORT = process.env.PORT || 4001 ;

app.listen(PORT,handleStartServer);