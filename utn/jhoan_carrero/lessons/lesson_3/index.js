const express = require("express");

const app = express();

const PORT = 4000;

app.use('/lesson_1', express.static(__dirname+"/../lesson_1/index.html"));

const handleRequest = (request,response,next)=>{
    response.send("Welcome to my application");
}


const sendLesson_1 = (request,response,next)=>{
    response.sendFile(__dirname+"/../lesson_1/index.html");
}


app.get("/",handleRequest);

app.get("/lesson_1",sendLesson_1);



app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`);    
});