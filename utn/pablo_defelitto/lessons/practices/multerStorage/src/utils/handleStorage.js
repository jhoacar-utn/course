const {storageConnection,GOOGLE,AMAZON} = require("@config/storage");
let handler = "handleLocalStorage";
switch(storageConnection){

    case GOOGLE:
        handler = "handleGoogleStorage";break;
    case AMAZON:
        handler = "handleAmazonStorage";break;
    default:
        handler = "handleLocalStorage";break;
}



module.exports = require(`./${handler}`);
