import express from "express";
import path from "path";

const app = express();

const port = 4000;

const buildClient = "client/dist/client";

app.use("/",express.static(path.resolve(`${__dirname}/../../${buildClient}`)));


app.listen(port,()=>{
    console.log("App is up");
})
