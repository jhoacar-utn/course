const express = require("express");

const app = express();

const PORT = 4000;
const NAME = "pepito";

/*

    GET -> los parametros son pasados por la URL

        http://localhost:4000/?name=pepito&last_name=perez

    POST -> request.body 
        {
            "email": "correo",
            "passsword": "contrasena"
        }
    
    /productos/limpieza
    /productos/cosmeticos

    /products/:type -> el trabajar con :type express colocara el nombre que se haya elegido en esa variable

    /lesson_1/:student/:age

    /lesson_1/pepito/23


*/


const restrictLesson_1 =  (request,response,next)=>{
    
    const student_name = request.params.student;

    if(student_name===NAME)
        next();
    else
        return response.send("Ud no es pepito y no puede ver la clase");
}

app.use('/lesson_1/:student',restrictLesson_1, express.static(__dirname+"/../lesson_1"));

const handleRequest = (request,response,next)=>{

    return response.send("Welcome to my application");
}


const sendLesson_1 = (request,response,next)=>{
    return response.sendFile(__dirname+"/../lesson_1/index.html");
}



app.get("/",handleRequest);

app.get("/lesson_1/:student",restrictLesson_1,sendLesson_1);



app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`);    
});