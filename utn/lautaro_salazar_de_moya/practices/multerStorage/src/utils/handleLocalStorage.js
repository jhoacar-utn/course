const multer = require("multer");

const { storageLocal: configStorage } = require("@config/storage");
const { getFileName } = require("@utils/handleFileName");


const handleDestination = function (req, file, cb) {
    const { pathStorage } = configStorage;
    cb(null, pathStorage);
};


const handleFileName = function (req, file, cb) {
    const fileName = `${getFileName(file.originalname)}`;
    const publicUrl = `/users/${fileName}`;
    req.avatarFile = publicUrl;
    return cb(null, fileName);
}


const storage = multer.diskStorage({
    destination: handleDestination,
    filename: handleFileName,
});

module.exports = storage;

