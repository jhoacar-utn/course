require('dotenv').config()
const express = require('express');
const handleStartServer = require('./src/helpers/handleStartServer');
const cors = require('cors')

const app = express()

const whiteList = ['http://localhost:3000']
app.use(cors({origin:whiteList}))

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const path = require('path');
const PORT = process.env.PORT || 8080


//ROUTES
//  /api/v1/auth
app.use("/api/v1/auth",require("./src/routes/apiAuthRouter"));
//  /api/v1/user
app.use("/api/v1/user",require("./src/routes/apiUserRouter"));




//STATIC FILES
app.use(express.static(path.join(__dirname,'../public/')))

//404 page
app.use((req,res)=>{
    res.sendFile((path.join(__dirname,'../public/404.html')))
})

app.listen(PORT, handleStartServer)