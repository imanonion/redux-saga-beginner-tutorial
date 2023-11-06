"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const counterTypes_1 = require("./counterTypes");
function counter(state = 0, action) {
    switch (action.type) {
        case counterTypes_1.counterTypes.INCREMENT:
            return state + 1;
        // from original sample project, not needed here..
        // // case counterTypes.INCREMENT_IF_ODD:
        // //  return state % 2 !== 0 ? state + 1 : state;
        case counterTypes_1.counterTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}
exports.default = counter;
