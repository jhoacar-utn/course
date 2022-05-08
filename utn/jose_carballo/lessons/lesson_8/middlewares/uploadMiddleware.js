const multer = require("multer");
const {maxFileSize} = require("../config/storage.js");
const myStorage = require("../helpers/handleStorage");

exports.uploadMiddleware = multer({ 
    storage: myStorage,
    limits: {
        fileSize: maxFileSize
    } 
});
