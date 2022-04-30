const { response } = require("express")
const path = require("path")
const fetch = require("node-fetch")

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

const getYoutubePage = async (req,res,next)=>{

    try{

        let youtubeHTML = "HTML of youtube"

        const response = await fetch("https://youtube.com")

        const html = await response.text()

        youtubeHTML = html

        console.log(youtubeHTML)

        return res.send(youtubeHTML)

    }catch(error){

        res.status(500)

        return res.json({error:error})

    }
        

}


module.exports = {
    getWelcomePage,
    getRegisterPage,
    getYoutubePage
}



module.exports.getWelcomePage = getWelcomePage
module.exports.getRegisterPage = getRegisterPage
module.exports.getYoutubePage = getYoutubePage
