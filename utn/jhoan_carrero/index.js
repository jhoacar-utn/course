const express = require('express');
const path = require('path');

const app = express();
const path_lessons = path.join(__dirname, 'lessons');

app.use('/lessons', express.static(path_lessons));

app.get("/",(req,res)=>{
    res.send(path_lessons);
});

module.exports = app;