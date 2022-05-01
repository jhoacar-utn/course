const {storageConnection,GOOGLE,AMAZON,uniqueFileName} = require("../config/storage");
let handler = "handleLocalStorage";
switch(storageConnection){

    case GOOGLE:
        handler = "handleGoogleStorage";break;
    case AMAZON:
        handler = "handleAmazonStorage";break;
    default:
        handler = "handleLocalStorage";break;
}

const getFileName = function (originalName) {
    if (!uniqueFileName)
        return originalName;
    const extension = originalName.split(".").pop();
    const fileName = `file-${Date.now()}.${extension}`;
    return fileName;
}

module.exports = require(`./${handler}`);
module.exports.getFileName = getFileName;