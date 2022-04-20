const MYSQL = require('mysql');

const {mysql} = require("../config");


const connection = MYSQL.createConnection(mysql);

module.exports = {

    executeQuery : function(query, callback){

        //connection.connect(); 
        //Removido por problemas en la version de mysql que cierra y abre conexiones constantemente

        connection.query(query, callback);

        //connection.end();

    }
}

