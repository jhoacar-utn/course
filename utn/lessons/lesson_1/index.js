const express = require('express');
const router = express.Router();
const student = "jhoan_carrero"

const app = express();

const path_lessons = __dirname;//path.join(__dirname, 'lessons');

router.use('/lessons/lesson_1', express.static(path_lessons));

router.get("/",(req,res)=>{
    res.send(`
    <h1 style="text-align:center"> Soy ${student.split("_").join(" ")}</h1> 
    <p>
        Aqui se encuentra mi primer TP
        <a href="${req.protocol}://${req.headers.host}/${student}/lessons/lesson_1/index.html">
            https://${req.headers.host}/${student}/lessons/lesson_1/index.html
        </a>
    </p>
    `);
});

router.get('*', (req,res)=>{
    res.status(404);
    res.send({error:`Not found in /${student}/**`})
});

app.use(`/${student}`, router) //Production Environment

app.use('/', router) //Local Environment

// Handle 404 - Keep this as a last route
app.use(function (req, res, next) {
    res.status(404);
    res.send({error:'Not found'});
});

module.exports = app;