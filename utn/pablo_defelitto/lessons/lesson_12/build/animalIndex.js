"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shark_1 = __importDefault(require("./acuatics/Shark"));
const Dolphin_1 = __importDefault(require("./acuatics/Dolphin"));
const acuaticAnimals = [];
acuaticAnimals.push(new Shark_1.default());
acuaticAnimals.push(new Dolphin_1.default());
acuaticAnimals.push({
    swim: function (s) {
        return true;
    },
    toString: function () {
        return "Otro objeto";
    }
});
function imprimir(element) {
    console.log(`${element}`);
}
acuaticAnimals.map((element) => {
    imprimir(element);
});
