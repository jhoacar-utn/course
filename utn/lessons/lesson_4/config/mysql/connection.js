const MYSQL = require('mysql');

const {mysql} = require("../config");


const connection = MYSQL.createConnection(mysql);

module.exports = {

    executeQuery : function(query, callback){

        connection.connect();

        connection.query(query, callback);

        connection.end();

    }
}

