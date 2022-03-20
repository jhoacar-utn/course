const fs = require('fs');
const path = require('path');

module.exports = function extract_students() {

    const path_folder = path.join(__dirname, '..')
    const skip = ["node_modules"]
    const students = fs.readdirSync(path_folder).filter((folder) => {
        return folder.includes('_') && !skip.includes(folder);
    });
    return students;
}


