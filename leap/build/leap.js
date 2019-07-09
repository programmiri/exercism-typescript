"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function evenlyDivisible(year, div) {
    return year % div === 0;
}
function isLeapYear(year) {
    if (evenlyDivisible(year, 4) &&
        !(evenlyDivisible(year, 100) && !evenlyDivisible(year, 400)))
        return true;
    return false;
}
exports.default = isLeapYear;
//# sourceMappingURL=leap.js.map