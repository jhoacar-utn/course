
const {uniqueFileName} = require("@config/storage");

const getFileName = function (originalName) {
    if (!uniqueFileName)
        return originalName;
    const extension = originalName.split(".").pop();
    const fileName = `file-${Date.now()}.${extension}`;
    return fileName;
}
module.exports = {
    getFileName
};