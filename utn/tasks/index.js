const express = require('express');
const router = express.Router();
const tasks = "/tasks";

const app = express();

const path_tasks = __dirname;

router.get("/",(req,res)=>{
    res.sendFile(`${path_tasks}/index.html`);
});

router.get("/lesson_1",(req,res)=>{
    res.redirect(`${tasks}/lesson_1/index.html`);
});

router.use("/", express.static(path_tasks));

router.get('*', (req,res)=>{
    res.status(404);
    res.send({error:`Not found in ${tasks}/**`})
});

app.use(`${tasks}`, router) //Production Environment

app.use('/', router) //Local Environment

// Handle 404 - Keep this as a last route
app.use(function (req, res, next) {
    res.status(404);
    res.send({error:'Not found'});
});

module.exports = app;