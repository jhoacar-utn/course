const path = require("path");
const fetch = require("node-fetch");

exports.getWelcomePage = (req,res,next)=>{

    //Para express en la version ^4.17.3 no enviara el archivo si la ruta tiene /../
    // Para resolver el /../ se utiliza la funcion resolve de el modulo path!!!!
    const pathFile = path.resolve(__dirname+"/../views/welcome.html");
    return res.sendFile(pathFile);
};


exports.getRegisterPage = (req,res,next)=>{

    const pathFile = path.resolve(__dirname+"/../views/register.html");
    return res.sendFile(pathFile);
};

exports.getLoginPage = (req,res,next)=>{

    const pathFile = path.resolve(__dirname+"/../views/login.html");
    return res.sendFile(pathFile);
};


exports.getDashboardPage = (req,res,next)=>{

    const userEmail = req.user.email;
    const userName = req.user.name;

    res.render('dashboard', {
        email: userEmail,
        name: userName,
      });
};


exports.getYoutubePage = async (req,res,next)=>{

    try{

        let youtubeHTML = "HTML of youtube";

        const response = await fetch("https://youtube.com");

        const html = await response.text();

        youtubeHTML = html;
        
        console.log(youtubeHTML);

        return res.send(youtubeHTML);

    }catch(error){

        res.status(500);

        return res.json({error: error});
    }
}
