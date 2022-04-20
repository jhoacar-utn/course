const express = require("express");
require('dotenv').config();

const {executeQuery} = require("./config/mysql/connection")

const app = express();

const PORT = process.env.PORT || 4001 ;


const handleRequest = (req,res,next)=>{
    return res.send("Welcome to my app");
}

app.get("/",handleRequest);


app.listen(PORT,()=>{
    
    console.log("Server on port ",PORT);

    executeQuery("SELECT 1 + 1 AS solution",function(err, rows, fields) {
        if (err) throw err;

        console.log("Connection enabled with mysql");
        console.log('The solution is: ', rows[0].solution);
      });
});