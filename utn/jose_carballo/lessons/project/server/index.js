require('dotenv').config();
const express = require("express");
const cookieSession = require('cookie-session');
const connection = require('./config/initDatabase');
const routes = require('./routes');
const cors = require('cors');
const {nameCookie,expireInCookie,cookieSecretKey} = require("./config/hash");

const PORT = process.env.PORT || 4001 ;
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieSession({name: nameCookie,keys:[cookieSecretKey], maxAge: expireInCookie}));


app.use('/', routes());
app.listen(PORT,() =>{
    connection
    console.log(`Server corriendo en el puerto ${PORT}`)
});