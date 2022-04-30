const { format } = require('util');
const multer = require('multer');
const {uniqueFileName, storageGoogle: config} = require("../config/storage");

// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GOOGLE_CLOUD_PROJECT environment variable. See
// https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// These environment variables are set automatically on Google App Engine
const { Storage } = require('@google-cloud/storage');

// Instantiate a storage client
const googleStorage = new Storage();

// A bucket is a container for objects (files).
const bucket = googleStorage.bucket(config.bucketName);

const handleDestination = function (req, file, cb) {
    
    // Create a new blob in the bucket and upload the file data.
    const blob = bucket.file(file.filename);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', err => {
        cb(err);
    });

    blobStream.on('finish', () => {
        // The public URL can be used to directly access the file via HTTP.
        const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
        cb(null,publicUrl);
    });

    blobStream.end(req.file.buffer);
};

const handleFileName = function (req, file, cb) {

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