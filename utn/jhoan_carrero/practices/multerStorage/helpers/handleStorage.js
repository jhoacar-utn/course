const {storageConnection,LOCAL,GOOGLE,AMAZON} = require("../config/storage");

let handler = LOCAL;
switch(storageConnection){

    case LOCAL:
        

}

module.exports = require(`./handle${handler}Storage`);