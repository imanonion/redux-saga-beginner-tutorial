"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function counter(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}
exports.default = counter;
