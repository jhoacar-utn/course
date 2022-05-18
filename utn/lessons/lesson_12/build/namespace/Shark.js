"use strict";
var Animals;
(function (Animals) {
    class Shark {
        swim(s) {
            console.log("Shark swimming");
            return true;
        }
    }
    Animals.Shark = Shark;
})(Animals || (Animals = {}));
