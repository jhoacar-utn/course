const multer = require('multer');
const storage = require("../helpers/handleStorage");
const {maxFileSize} = require("../config/storage");
const uploadMiddleware = multer({
    storage,
    limits: {
        fileSize: maxFileSize, 
    },
});
module.exports = uploadMiddleware;