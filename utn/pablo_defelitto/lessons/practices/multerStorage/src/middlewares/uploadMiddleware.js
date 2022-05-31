const multer = require('multer');
const storage = require("@utils/handleStorage");
const {maxFileSize} = require("@config/storage");
const uploadMiddleware = multer({
    storage,
    limits: {
        fileSize: maxFileSize, 
    },
});
module.exports = uploadMiddleware;