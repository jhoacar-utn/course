const path = require("path");
module.exports = {
    LOCAL: "local",
    GOOGLE: "google",
    AMAZON: 'aws',
    storageConnection: process.env.STORAGE_CONNECTION || 'local',
    uniqueFileName: parseInt(process.env.UNIQUE_FILE_NAME) === 1,
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE || 5 * 1024 * 1024),// Default no larger than 5mb
    storageLocal: {
        pathStorage: require("@storage"),
    },
    storageGoogle: {
        bucketName: process.env.GCLOUD_STORAGE_BUCKET || 'pwa6822',
        pathStorage: process.env.STORAGE_PATH || 'storage',
    },
    storageAmazon: {
        pathCredentials: process.env.AMAZON_APPLICATION_CREDENTIALS || 'amazonCredentials.json',
        regionBucket: process.env.AWS_REGION_BUCKET || 'us-east-2',
        bucketName: process.env.AWS_STORAGE_BUCKET || 'pwa6822',
        pathStorage: process.env.STORAGE_PATH || 'storage',
    }
}