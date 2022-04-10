const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send('Soy Jhoan');
})

module.exports = app;