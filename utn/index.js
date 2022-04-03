const functions = require('firebase-functions');

const welcome_app = require('./welcome/index.js');
exports["welcome"] = functions.https.onRequest(welcome_app);

const tasks_app = require('./tasks/index.js');
exports["tasks"] = functions.https.onRequest(tasks_app);


const extract_students = require('./helpers/extract_students');
const students = extract_students();
students.map(student => {
    const student_app = require(`./${student}/index.js`);
    exports[student] = functions.https.onRequest(student_app);
});


