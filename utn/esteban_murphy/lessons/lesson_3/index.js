const express = require("express"); 

const app = express(); //app es express, cuando llamamos app, llamamos a express y sus métodos

const PORT = 4000;

const NAME = "pepito";


/*
    GET -> los parámetros son pasados por URL (se lee en la barra de dirección)
        http://localhost:4000/?name=pepito&last_name=perez

    POST -> request.body
        {
            "email": "correo",
            "password": "contraseña",
        }

    /productos/limpieza
    /productos/cosmeticos

    /products/:type -> el trabajar con :type express colocará el nombra que se haya elegido 

    /lesson_1/:student

*/


const restrictLesson_1 = (request, response, next)=>{
    
    const student_name = request.params.student;
    
    if(student_name===NAME)
        next();
    //const name_student = request.params           //Trae todos los parámetros que tenga
    //response.send(request.params); //Vemos los parámetros en Chrome
    //console.log(request.params); // Vemos los parámetros por consola
    else
        return response.send("Ud no es Pepito, no puede leer"); 
}


app.use('/lesson_1/:student',restrictLesson_1, express.static(__dirname+"/../lesson_1")); //Con ésto express permite compartir carpeta

const handleRequest = (request, response, next)=>{
//request es lo que pide el cliente, response es nuestra respuerta
//next es un paso intermedio entre la request y la response.

    return response.send("Welcome to the Jaguar House")
}


const sendLesson_1 = (request, response, next)=>{
    
      return response.sendFile(__dirname+"/../lesson_1/index.html");//__dirname da la dirección absoluta del archivo
}



app.get("/",handleRequest); //Sirve para obtener recurso

app.get("/lesson_1/:student",restrictLesson_1, sendLesson_1); // Va en orden, si supera restrictLesson pasa al siguiente


app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`); 
})