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

module.exports = app;
