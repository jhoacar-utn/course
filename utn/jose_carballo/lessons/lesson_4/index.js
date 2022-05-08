const express = require('express');
require('dotenv').config();
const {executeQuery} = require('./config/mysql/connection');

const server = express();
const PORT = process.env.PORT || 4001;


const getRequetInit = (req,res,next) =>{
    const queryWelcomeMessage = 'SELECT message from welcome';
    executeQuery(queryWelcomeMessage, function (err, rows, fields) {
        if (err) throw err;
        const message =  rows[0].message;
        return res.send(message);
      })
}

server.get('/',getRequetInit);

server.listen(PORT, () =>{
    console.log(`server on port ${PORT}`);
    executeQuery('SELECT 1 + 1 AS solution', function (err, rows, fields) {
        if (err) throw err;
        console.log('connection enabled witch MYSQL');
        console.log("The solution is: ", rows[0].solution);
      })
});