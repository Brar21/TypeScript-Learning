"use strict";
function newCar(id) {
    return id === 0 ? null : { buyDate: new Date(), seat: 4 };
}
let car = newCar(1);
console.log(car);
let taxi = newCar(1);
console.log(taxi === null || taxi === void 0 ? void 0 : taxi.buyDate.getFullYear(), taxi === null || taxi === void 0 ? void 0 : taxi.seat);
//# sourceMappingURL=section2_5.js.map