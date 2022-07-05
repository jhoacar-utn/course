const fs = require('fs')
const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink)

const multer = require("multer");

const path = require("path");
const { error } = require('console');

const handleDestination = function (req, file, cb) {
    const pathStorage = path.resolve(__dirname + "/../storage");
    return cb(null, pathStorage);
};

const handleFileName = function (req, file, cb) {

    try{
        console.log("Borrando")
        console.log(path.resolve(__dirname + "/../storage/"+ req.user.avatar.split("/").pop()));
        unlinkAsync(path.resolve(__dirname + "/../storage/"+ req.user.avatar.split("/").pop()));
    }catch{
        console.log(error)
    }
    const uniqueSuffix = Date.now();
    const filename = file.originalname;
    const extension = filename.split(".").pop();
    const newName =  'filename-' + uniqueSuffix + "." + extension;

    req.avatarPath = "/users/"+newName;
     req.user.avatar = await req.avatarPath;
    console.log("Nuevo archivo")
    console.log(req.user.avatar);
    return cb(null, newName);
}

const storage = multer.diskStorage({
    destination: handleDestination,
    filename: handleFileName
})


module.exports = storage;