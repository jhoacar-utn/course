const { mongo } = require("../database");
const mongoose = require("mongoose");


module.exports = mongoose
  .connect(mongo.uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  .then(() => console.log("Conenctado mongo"))
  .catch((e) => {
    console.log(e);
    console.log('Hubo un error no se pudo conectar');
  });
