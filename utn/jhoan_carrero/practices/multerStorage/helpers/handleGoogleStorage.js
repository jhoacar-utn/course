// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GOOGLE_CLOUD_PROJECT environment variable. See
// https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// These environment variables are set automatically on Google App Engine
const { Storage } = require('@google-cloud/storage');
const {format} = require('util');
const { uniqueFileName, storageGoogle: config } = require("../config/storage");

const getDestination = function (req, file, cb) {
    cb(null, '/dev/null');
}


const handleFile = function (req, file, cb) {

    this.getDestination(req, file, function (err, path) {

        if (err) return cb(err)

        const storage = new Storage();
        // A bucket is a container for objects (files).
        const bucket = storage.bucket(config.bucketName);

        // Create a new blob in the bucket and upload the file data.
        const storageFile = bucket.file(file.originalname); // Creating a new file in bucket with name = fileName
        const fileWriteStream = storageFile.createWriteStream(); // Obtaining WritableStream from storageFile
        const fileReadStream = file.stream; // ReadableStream for uploaded file

        fileReadStream
            .pipe(fileWriteStream) // Piping ReadableStream of uploaded file to WritableStream of file in bucket
            .on("error", (err) => {
                // Error occured during piping 
                fileWriteStream.end(); // Closing the WritableStream
                storageFile.delete({ ignoreNotFound: true }); // Deleting file from bucket
                cb(err);
            })
            .on("finish", () => {
                // All the data was written successfully
                const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${fileWriteStream.name}`);
                cb(null, publicUrl);
            });

    })
}

const removeFile = function (req, file, cb) { };


function MyCustomStorage() { this.getDestination = getDestination };
MyCustomStorage.prototype._handleFile = handleFile;
MyCustomStorage.prototype._removeFile = removeFile;

const storage = new MyCustomStorage();
module.exports = storage;