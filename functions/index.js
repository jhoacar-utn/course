const functions = require('firebase-functions');
const express = require('express');
const app = express();
const path = require('path')

const welcome = path.join(__dirname, 'public')

app.use('/',express.static(welcome));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

exports["welcome"] = functions.https.onRequest(app);

const extract_students = require('./helpers/extract_students');

const students = extract_students();

students.map(student=>{
    const student_app = require(`./${student}/index.js`);
    exports[student] = functions.https.onRequest(student_app);
});
