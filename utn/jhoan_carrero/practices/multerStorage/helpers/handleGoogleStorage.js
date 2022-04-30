// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
const storage = new Storage();
// Makes an authenticated API request.
async function listBuckets() {
  try {
    const results = await storage.getBuckets();

    const [buckets] = results;

    console.log('Buckets:');
    buckets.forEach(bucket => {
      console.log(bucket.name);
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
}
listBuckets();


// const { format } = require('util');
// const multer = require('multer');

// // By default, the client will authenticate using the service account file
// // specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// // the project specified by the GOOGLE_CLOUD_PROJECT environment variable. See
// // https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// // These environment variables are set automatically on Google App Engine
// const { Storage } = require('@google-cloud/storage');

// // Instantiate a storage client
// const googleStorage = new Storage();

// // A bucket is a container for objects (files).
// const bucket = googleStorage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

// const handleDestination = function (req, file, cb) {
//     const { pathStorage } = config;


//     // Create a new blob in the bucket and upload the file data.
//     const blob = bucket.file(file.filename);
//     const blobStream = blob.createWriteStream();

//     blobStream.on('error', err => {
//         cb(err);
//     });

//     blobStream.on('finish', () => {
//         // The public URL can be used to directly access the file via HTTP.
        
//         const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
//         cb(null,publicUrl);
//     });

//     blobStream.end(req.file.buffer);
// };

// const handleFileName = function (req, file, cb) {
//     const { uniqueFileName } = config;

//     if (!uniqueFileName)
//         return cb(null, file.originalname);

//     const extension = file.originalname.split(".").pop();
//     const filename = `file-${Date.now()}.${extension}`;
//     cb(null, filename);
// }


// const storage = multer.diskStorage({
//     destination: handleDestination,
//     filename: handleFileName,
// });

// module.exports = storage;