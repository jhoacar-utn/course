const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const { storageAmazon: configStorage } = require("@config/storage");
const { getFileName } = require("@utils/handleFileName");


aws.config.loadFromPath(configStorage.pathCredentials);

const s3 = new aws.S3();


const handleMetaData = function (req, file, cb) {
    cb(null, { fieldname: file.fieldname });
};

const handleFileName = function (req, file, cb) {

    const fileName = `${configStorage.pathStorage}/${getFileName(file.originalname)}`;
    const publicUrl = `https://${configStorage.bucketName}.s3.${configStorage.regionBucket}.amazonaws.com/${fileName}`;
    req.avatarFile = publicUrl;
    cb(null, fileName);
};


const storage = multerS3({
    acl: "public-read",
    s3,
    bucket: configStorage.bucketName,
    metadata: handleMetaData,
    key: handleFileName,
});

module.exports = storage;