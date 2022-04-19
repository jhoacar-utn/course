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

/*
function(err, rows, fields) {
        
            if (err) throw err;
            
            return rows;
            console.log('The solution is: ', rows[0].solution);
        }
*/

