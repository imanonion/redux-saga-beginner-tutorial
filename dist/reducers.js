"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function counter(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        // from original sample project, not needed here..
        // // case counterTypes.INCREMENT_IF_ODD:
        // //  return state % 2 !== 0 ? state + 1 : state;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}
exports.default = counter;
