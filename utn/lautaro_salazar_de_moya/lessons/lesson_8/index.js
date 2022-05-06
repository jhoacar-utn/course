require('dotenv').config();
const express = require("express");
const cookieSession = require('cookie-session');
const hbs = require('express-hbs');
const handleStartServer = require('./helpers/handleStartServer');
const {nameCookie,expireInCookie,cookieSecretKey} = require("./config/hash");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieSession({name: nameCookie,keys:[cookieSecretKey], maxAge: expireInCookie}));
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views'
  }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


const routerApi = require("./routes/api");
const routerWeb = require("./routes/web");

app.use("/api",routerApi);
app.use("/",routerWeb);
app.use("/users",express.static(__dirname+"/storage"));

const PORT = process.env.PORT || 4001 ;

app.listen(PORT,handleStartServer);