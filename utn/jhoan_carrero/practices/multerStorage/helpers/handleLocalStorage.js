const multer = require("multer");

const { storageLocal: config } = require("../config/storage");


const handleDestination = function (req, file, cb) {
    const { pathStorage } = config;
    cb(null, pathStorage);
};

const handleFileName = function (req, file, cb) {
    const { uniqueFileName } = config;

    if (!uniqueFileName)
        return cb(null, file.originalname);

    const extension = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${extension}`;
    cb(null, filename);
}


const storage = multer.diskStorage({
    destination: handleDestination,
    filename: handleFileName,
});

module.exports = storage;

