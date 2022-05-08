require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const { dbConnection } = require('./db/config');
const bodyParser = require('body-parser');
const cors = require('cors');

const {PORT} = process.env;
const DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10;
const DEFAULT_PARAMETER_LIMIT = 10000;
const bodyParserJsonConfig = () => ({
    parameterLimit: DEFAULT_PARAMETER_LIMIT,
    limit: DEFAULT_BODY_SIZE_LIMIT
  });
  
const bodyParserUrlencodedConfig = () => ({
    extended: true,
    parameterLimit: DEFAULT_PARAMETER_LIMIT,
    limit: DEFAULT_BODY_SIZE_LIMIT
  });
  
const app = express();
app.use(cors());
app.use(bodyParser.json(bodyParserJsonConfig()));
app.use(bodyParser.urlencoded(bodyParserUrlencodedConfig()));

app.use('/', routes());
app.listen(PORT,  () => {
    dbConnection()
})