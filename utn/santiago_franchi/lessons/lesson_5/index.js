const express = require("express");
require('dotenv').config();
const bodyParser = require("body-parser")

const routerApi = require("./routes/api")
const routeWeb = require("./routes/web")



const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use("/api", routerApi);
app.use("/", routeWeb)
//app.use(bodyParser.json())


const PORT = process.env.PORT || 4001 ;

app.listen(PORT,()=>{
    
    console.log("Server on port ",PORT);

    
});