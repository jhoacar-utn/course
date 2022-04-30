const multer = require('multer');
const storage = require("../helpers/handleStorage");
const uploadMiddleware = multer({storage});
module.exports = uploadMiddleware;