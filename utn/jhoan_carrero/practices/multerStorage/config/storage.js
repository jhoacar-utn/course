const path = require("path");
module.exports = {
    LOCAL: "Local",
    GOOGLE: "Google",
    AMAZON: "Amazon",
    storageConnection : process.env.STORAGE_CONNECTION || 'local',
    storageLocal: {
        pathStorage: path.resolve(`${__dirname}/../${process.env.STORAGE_PATH || 'storage'}`),
        uniqueFileName: process.env.UNIQUE_FILE_NAME || true,
    },
    storageGoogle : {

    },
    storageAmazon :{

    }
}