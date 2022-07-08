const mongoose = require('mongoose');
const {DB_CONECT,PORT} = process.env

exports.dbConnection = async() =>{

    try {
     await   mongoose.connect(`mongodb://localhost/${DB_CONECT}`,{
         useNewUrlParser:true,
     });
     console.log(`Data Base Conected on port:${PORT}`);
    } catch (error) {
        console.log(error);
        throw new Error('Error to initial Data Base');
    }

}