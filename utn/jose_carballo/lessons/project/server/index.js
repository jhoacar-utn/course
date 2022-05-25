require('dotenv').config();
const express = require("express");
const cookieSession = require('cookie-session');
const handleStartServer = require('./helpers/handleStartServer');
const {nameCookie,expireInCookie,cookieSecretKey} = require("./config/config");

const PORT = process.env.PORT || 4001 ;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieSession({name: nameCookie,keys:[cookieSecretKey], maxAge: expireInCookie}));



app.listen(PORT,handleStartServer);