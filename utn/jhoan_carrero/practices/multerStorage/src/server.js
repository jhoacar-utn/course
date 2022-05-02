require('dotenv').config();
const express = require("express");
const cookieSession = require('cookie-session');
const hbs = require('express-hbs');
const { nameCookie, expireInCookie, cookieSecretKey } = require("@config/hash");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({ name: nameCookie, keys: [cookieSecretKey], maxAge: expireInCookie }));

app.engine('hbs', hbs.express4({ partialsDir: require('@views') }));
app.set('view engine', 'hbs');
app.set('views', require('@views'));


const routerApi = require("@routes/api");
const routerWeb = require("@routes/web");

app.use("/api", routerApi);
app.use("/", routerWeb);

app.use("/", express.static(require("@public")));
app.use("/users", express.static(require("@storage")));

module.exports = app;