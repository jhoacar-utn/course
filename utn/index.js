const functions = require('firebase-functions');
const express = require('express');
const app = express();
const path = require('path')

const welcome = path.join(__dirname, 'public')

app.get('/', (req, res) => {
    res.sendFile(`${welcome}/index.html`);
});


// Handle 404 - Keep this as a last route
app.use(function (req, res, next) {
    res.status(404);
    res.sendFile(`${welcome}/404.html`);
});

exports["welcome"] = functions.https.onRequest(app);

const extract_students = require('./helpers/extract_students');

const students = extract_students();

students.map(student => {
    const student_app = require(`./${student}/index.js`);
    exports[student] = functions.https.onRequest(student_app);
});

const tasks_app = require('./tasks/index.js');
exports.tasks = functions.https.onRequest(tasks_app);
