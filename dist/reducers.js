"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
    case operationTypes_1.counterTypes.INCREMENT:
      return state + 1;
    case "DECREMENT":
    // from original sample project, not needed here..
    // // case operationTypes.INCREMENT_IF_ODD:
    // //  return state % 2 !== 0 ? state + 1 : state;
    case operationTypes_1.counterTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
exports.default = counter;
