const path = require("path");
module.exports = {
    LOCAL: "local",
    GOOGLE: "google",
    AMAZON: 'aws',
    storageConnection: process.env.STORAGE_CONNECTION || 'local',
    uniqueFileName: process.env.UNIQUE_FILE_NAME || true,
    storageLocal: {
        pathStorage: path.resolve(`${__dirname}/../${process.env.STORAGE_PATH || 'storage'}`),
    },
    storageGoogle: {
        bucketName: process.env.GCLOUD_STORAGE_BUCKET || 'pwa6822',
        pathStorage: process.env.STORAGE_PATH || 'storage',
    },
    storageAmazon: {
        pathCredentials: process.env.AMAZON_APPLICATION_CREDENTIALS || 'amazonCredentials.json',
        bucketName: process.env.AWS_STORAGE_BUCKET || 'pwa6822',
        pathStorage: process.env.STORAGE_PATH || 'storage',
    }
}