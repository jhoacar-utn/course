const path = require("path")

const getWelcomePage = (req,res,next)=>{

    // para express en la version 4.17.3 no enviara el archivo si la ruta tiene /../
    // para resolver el /../ se utiliza la funcion resolve del modulo path

    //return res.sendFile(__dirname+"/../views/welcome.html")

    const pathFile = path.resolve(__dirname+"/../views/welcome.html")

    return res.sendFile(pathFile)
}

const getRegisterPage = (req,res,next)=>{

    const pathFile = path.resolve(__dirname+"/../views/register.html")

    return res.sendFile(pathFile)
}

module.exports.getWelcomePage = getWelcomePage
module.exports.getRegisterPage = getRegisterPage