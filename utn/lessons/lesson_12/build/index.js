"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 4000;
const buildClient = "client/dist/client";
const pathStatic = path_1.default.resolve(`${__dirname}/../${buildClient}`);
app.use("/", express_1.default.static(pathStatic));
app.listen(port, () => {
    console.log("App is up");
});
