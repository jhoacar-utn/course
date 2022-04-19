const MYSQL = require("mysql");
const { mysql } = require("../config");

const connection = MYSQL.createConnection(mysql);
/*const connection = MYSQL.createConnection({
  host: mysql.host,
  user: mysql.user,
  password: mysql.password,
});*/

module.exports = {
  executeQuery: (query, callback) => {
    connection.connect();
    connection.query(query, callback);
    connection.end();
  },
};
