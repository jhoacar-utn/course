const express = require('express');

const app = express();
app.use('/lesson_1',express.static(__dirname+"/../lesson_1/index.html"));
const port = 4000;

app.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});

const getRequest = (req,res,next) =>{
    res.send("welcome to my application")
};
const sendLesson_1 = (req,res,next) =>{
    res.send('../lesson_1/index.html')
}
app.get("/",getRequest);
app.get("/lesson_1",sendLesson_1);
