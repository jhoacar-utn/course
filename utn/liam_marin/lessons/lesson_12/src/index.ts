import express from "express";
import path from "path";

const app = express();

const port = 4000;

const buildClient = "client/dist/client";
const pathStatic = path.resolve(`${__dirname}/../${buildClient}`);

app.use("/",express.static(pathStatic));


app.listen(port,()=>{
    console.log("App is up");
})