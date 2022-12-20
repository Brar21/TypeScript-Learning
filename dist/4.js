"use strict";
const Starting = 1;
const Middle = 2;
const Large = 3;
var Intials;
(function (Intials) {
    Intials[Intials["Starting"] = 1] = "Starting";
    Intials[Intials["Middle"] = 2] = "Middle";
    Intials[Intials["Large"] = 3] = "Large";
})(Intials || (Intials = {}));
;
let myIntials = Intials.Middle;
console.log(myIntials);
;
let myIntial = 2;
console.log(myIntials);
//# sourceMappingURL=4.js.map