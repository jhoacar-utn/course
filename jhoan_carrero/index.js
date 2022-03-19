const functions = require('firebase-functions');

const app = require('./project/backend_node');

app.use('/lessons', express.static('lessons'))

exports.jhoan_carrero = functions.https.onRequest(app);