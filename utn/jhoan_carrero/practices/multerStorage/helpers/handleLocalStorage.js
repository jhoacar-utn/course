const multer = require("multer");

const { storageLocal: configStorage } = require("../config/storage");
const { getFileName } = require("./handleFileName");


const handleDestination = function (req, file, cb) {
    const { pathStorage } = configStorage;
    cb(null, pathStorage);
};


const handleFileName = function (req, file, cb) {
    const fileName = `${configStorage.pathStorage}/${getFileName(file.originalname)}`;
    const publicUrl = `${fileName}`;
    req.avatarFile = publicUrl;
    return cb(null, fileName);
}


const storage = multer.diskStorage({
    destination: handleDestination,
    filename: handleFileName,
});

module.exports = storage;
module.exports.getFileName = getFileName;

