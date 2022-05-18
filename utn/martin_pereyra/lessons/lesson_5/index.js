require('dotenv').config();
const express = require("express");


const routerApi = require("./routes/api");
const routerWeb = require("./routes/web");

const {executeQuery} = require("./config/mysql/connection")


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api",routerApi);
app.use("/",routerWeb);



const PORT = process.env.PORT || 4001 ;


app.listen(PORT,()=>{
    
    console.log("Server on port ",PORT);

    executeQuery("SELECT 1 + 1 AS solution",function(err, rows, fields) {
        
        if (err) throw err;

        console.log("Connection enabled with mysql");
        console.log('The solution is: ', rows[0].solution);
      });
});