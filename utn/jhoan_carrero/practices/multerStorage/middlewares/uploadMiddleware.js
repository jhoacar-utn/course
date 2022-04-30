const multer = require('multer');
const storage = require("../helpers/handleStorage");
const uploadMiddleware = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    },
});
module.exports = uploadMiddleware;