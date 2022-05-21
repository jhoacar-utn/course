import { Console } from "console";
import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Server in listenning on port ${PORT}`);
});