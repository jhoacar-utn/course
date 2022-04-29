const path = require("path");
const fetch = require("node-fetch");

const getWelcomePage = (req,res,next)=>{

    //Para express en la version ^4.17.3 no enviara el archivo si la ruta tiene /../
    // Para resolver el /../ se utiliza la funcion resolve de el modulo path!!!!
    const pathFile = path.resolve(__dirname+"/../views/welcome.html");
    return res.sendFile(pathFile);
};


const getRegisterPage = (req,res,next)=>{

    const pathFile = path.resolve(__dirname+"/../views/register.html");
    return res.sendFile(pathFile);
};

const getYoutubePage = (req,res,next)=>{

    const youtubeHTML = "HTML of youtube";

    fetch("https://youtube.com")
    .then((response)=>{
        return response.text()
    })
    .then((html)=>{
        youtubeHTML = html;
    })
    .catch((error)=>{
        console.log(error);
    })

    return res.send(youtubeHTML);


}


module.exports = {
    getWelcomePage,
    getRegisterPage,
    getYoutubePage,
};
