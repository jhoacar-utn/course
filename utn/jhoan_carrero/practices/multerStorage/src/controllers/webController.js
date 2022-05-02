const fetch = require("node-fetch");
const { userModel } = require("@models/index");

const getWelcomePage = (req, res, next) => {

    return res.render('welcome');
};


const getRegisterPage = (req, res, next) => {

    return res.render('register');
};

const getLoginPage = (req, res, next) => {

    return res.render('login');
};


const getDashboardPage = async (req, res, next) => {

    const email = req.user.email;
    const user = await userModel.first({ email });

    return res.render('dashboard', user);
};


const getYoutubePage = async (req, res, next) => {

    try {
        const response = await fetch("https://youtube.com");
        return res.send(await response.text());
    } catch (error) {
        res.status(500);
        return res.json({ error: error });
    }
}


module.exports = {
    getWelcomePage,
    getRegisterPage,
    getLoginPage,
    getYoutubePage,
    getDashboardPage,
};