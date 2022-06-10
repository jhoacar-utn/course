require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routerApi = require("./routes/api");
const {executeQuery} = require("./config/mysql/connection");
const app = express();

app.use(cors());

app.use("/api/v1",routerApi);

const PORT =process.env.PORT || 4000;

app.listen(PORT, ()=>{

    console.log(`server on in port ${PORT}`);

    executeQuery('SELECT 1 + 1 AS solution', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows[0].solution);
        console.log("create connection");
      });
});


