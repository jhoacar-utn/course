const fetch = require("node-fetch");
const { userModel } = require("@models/index");

const getWelcomePage = (req, res, next) => {

    const isAuthorized = typeof req.auth.error === 'undefined';

    if(isAuthorized)
        return res.redirect('dashboard');

    const context = {
        title: 'My App',
        hasButtonNav: true,
        isAuthorized,
        error: req.auth.error
    }
    return res.render('welcome', context);
};


const getRegisterPage = (req, res, next) => {

    const isAuthorized = typeof req.auth.error === 'undefined';

    if (isAuthorized)
        return res.redirect('dashboard');

    const context = {
        title: 'Register',
        hasButtonNav: false,
        isAuthorized,
        error: req.auth.error
    }
    return res.render('register', context);
};

const getLoginPage = (req, res, next) => {

    const isAuthorized = typeof req.auth.error === 'undefined';

    if (isAuthorized)
        return res.redirect('dashboard');

    const context = {
        title: 'Login',
        hasButtonNav: false,
        isAuthorized,
        error: req.auth.error
    }
    return res.render('login', context);
};


const getDashboardPage = async (req, res, next) => {

    const isAuthorized = typeof req.auth.error === 'undefined';

    if (!isAuthorized)
        return res.redirect('login');

    const email = req.user.email;
    const user = await userModel.first({ email });

    const context = {
        title: 'Dashboard',
        user,
        hasButtonNav: true,
        isAuthorized,
        error: req.auth.error
    }

    return res.render('dashboard', context);
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