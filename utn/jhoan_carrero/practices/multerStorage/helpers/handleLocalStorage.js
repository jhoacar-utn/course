const multer = require("multer");

const { storageLocal: configStorage } = require("../config/storage");
const { getFileName } = require("./handleStorage");


const handleDestination = function (req, file, cb) {
    const { pathStorage } = configStorage;
    cb(null, pathStorage);
};


const handleFileName = function (req, file, cb) {
    return cb(null, getFileName(file.originalName));
}


const storage = multer.diskStorage({
    destination: handleDestination,
    filename: handleFileName,
});

module.exports = storage;
module.exports.getFileName = getFileName;

