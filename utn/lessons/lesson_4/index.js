const express = require("express");

const app = express();

const PORT = 4000;


const handleRequest = (req,res,next)=>{
    return res.send("Welcome to my app");
}

app.get("/",handleRequest);


app.listen(PORT,()=>{
    console.log("Server on port ",PORT);
});