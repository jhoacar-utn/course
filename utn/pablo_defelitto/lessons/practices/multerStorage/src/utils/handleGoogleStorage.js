// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GOOGLE_CLOUD_PROJECT environment variable. See
// https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// These environment variables are set automatically on Google App Engine
const { Storage } = require('@google-cloud/storage');
const { storageGoogle: configStorage } = require("@config/storage");

const { getFileName } = require("@utils/handleFileName");

const customHandleFile = function (req, file, cb) {

    const storage = new Storage();
    // A bucket is a container for objects (files).
    const bucket = storage.bucket(configStorage.bucketName);

    if (!bucket)
        return cb("bucket is a required field.");

    const fileName = `${configStorage.pathStorage}/${getFileName(file.originalname)}`;

    const storageFile = bucket.file(fileName); // Creating a new file in bucket with name = fileName
    const fileWriteStream = storageFile.createWriteStream(); // Obtaining WritableStream from storageFile

    const fileReadStream = file.stream; // ReadableStream for uploaded file

    fileReadStream.pipe(fileWriteStream) // Piping ReadableStream of uploaded file to WritableStream of file in bucket
        .on("error", (err) => {
            // Error occured during piping 
            fileWriteStream.end(); // Closing the WritableStream
            storageFile.delete({ ignoreNotFound: true }); // Deleting file from bucket
            cb(err);
        })
        .on("finish", () => {
            // All the data was written successfully
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileWriteStream.name}`;
            req.avatarFile = publicUrl;
            cb(null, fileWriteStream.name); // Adding custom fields to file
        });
};

const customRemoveFile = function (req, file, cb) { };


function MyCustomStorage() {};
MyCustomStorage.prototype._handleFile = customHandleFile;
MyCustomStorage.prototype._removeFile = customRemoveFile;

module.exports = new MyCustomStorage();