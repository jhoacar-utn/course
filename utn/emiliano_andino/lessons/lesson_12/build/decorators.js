"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
function get(path, message) {
    console.log("Using my own decorator for GET request");
    return function () {
        route.use(path, (req, res, next) => {
            res.send("message");
        });
    };
}
exports.default = get;
