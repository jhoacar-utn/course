const path = require("path");
const express = require("express");

const app = express();
const port = 5500;

function lock(req, res, next) {
    if (req.params.student === "pepito") {
        next();
    } else {
        res.send("Pepito is gone, reduced to atoms.");
    }
}

app.use("/lesson_1", lock, express.static(path.join(__dirname, "../lesson_1/")));

app.get("/", (req, res) => {
    res.send("Welcome to the jungle.");
});

app.listen(port, () => {
    console.log(`Running server on http://localhost:${port}`);
});
