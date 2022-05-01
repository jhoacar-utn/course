const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const { storageAmazon: configStorage } = require("../config/storage");
const { getFileName } = require("./handleFileName");


aws.config.loadFromPath(configStorage.pathCredentials);

const s3 = new aws.S3();


const handleMetaData = function (req, file, cb) {
    cb(null, { fieldName: "TESTING_METADATA" });
};

const handleFileName = function (req, file, cb) {

    const publicUrl = `https://${configStorage.bucketName}.s3.${configStorage.regionBucket}.amazonaws.com/${getFileName(file.originalname)}`;
    cb(null, publicUrl);
};


const storage = multerS3({
    acl: "public-read",
    s3,
    bucket: configStorage.bucketName,
    metadata: handleMetaData,
    key: handleFileName,
});

module.exports = storage;