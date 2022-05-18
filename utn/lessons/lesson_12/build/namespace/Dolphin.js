"use strict";
var Animals;
(function (Animals) {
    class Dolphin {
        swim(s) {
            console.log("Dolphin swimming");
            return true;
        }
    }
    Animals.Dolphin = Dolphin;
})(Animals || (Animals = {}));
