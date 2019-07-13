"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shallowEqualObjects = function (objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (!objA || !objB) {
        return false;
    }
    var objAKeys = Object.keys(objA);
    var objBKeys = Object.keys(objB);
    if (objAKeys.length !== objBKeys.length) {
        return false;
    }
    for (var key in objAKeys) {
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
};
