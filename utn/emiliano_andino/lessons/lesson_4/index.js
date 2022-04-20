const express = require("express");
require('dotenv').config()

const {executeQuery} = require('./config/mysql/connection')
const app = express();

const PORT = process.env.PORT;


const handleRequest = (req,res,next)=>{

    const query = "select message from welcome";

    executeQuery( query,  function(err, rows, fields) {
        if (err) throw err;

        const message = rows[0].message;
        return res.send(message);
      });
    
}

app.get("/",handleRequest);


app.listen(PORT,()=>{
    console.log("Server on port ",PORT);
    
});