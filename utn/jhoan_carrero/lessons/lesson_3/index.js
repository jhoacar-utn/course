const express = require("express");

const app = express();

const PORT = 4000;

const NAME = "pepito";

app.use('/lesson_1', express.static(__dirname+"/../lesson_1/index.html"));

const handleRequest = (request,response,next)=>{
    response.send("Welcome to my application");
}


const sendLesson_1 = (request,response,next)=>{
    response.sendFile(__dirname+"/../lesson_1/index.html");
}


const restrictLesson_1 =  (request,response,next)=>{
    if(NAME=="pepito")
        next();
    else
        response.send("Ud no es pepito y no puede ver la clase");
}

app.get("/",handleRequest);

app.get("/lesson_1",restrictLesson_1,sendLesson_1);



app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`);    
});