const express = require("express");
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 4001 ;


const handleRequest = (req,res,next)=>{
    return res.send("Welcome to my app");
}

app.get("/",handleRequest);


app.listen(PORT,()=>{
    console.log("Server on port ",PORT);
});