"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrementAsync = exports.incrementAsync = exports.delay = void 0;
const effects_1 = require("redux-saga/effects");
const actions = __importStar(require("./actions"));
function helloSaga() {
  console.log("Hello Sagas!");
}
// delay function returns a promise that resolves after a set amount of time
// blocks the generator
// export for tests
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
exports.delay = delay;
// Worker saga that performs the async increment task
// yielded objects are kinda like "instructions" to middleware
// incrementAsync is a GENERATOR FUNCTION
function* incrementAsync() {
  // yield promise to middleware -> middleware will suspend the Saga until the promise completes
  // yield delay(1000);
  // using call instead of calling delay directly
  yield (0, effects_1.call)(exports.delay, 1000);
  // after the promise is resolved above, this next statement is then executed
  // `put` is an EFFECT that is retrieved by the middleware
  // the INCREMENT action is dispatched
  yield (0, effects_1.put)(actions.increment);
}
exports.incrementAsync = incrementAsync;
//Watcher saga that will spawn a new incrementAsync task on each INCREMENT_ASYNC action
// takeEvery is a helper function that listens for dispatched INCREMENT_ASYNC actions and then runs incrementAsync each time
function* watchIncrementAsync() {
  yield (0, effects_1.takeEvery)(actions.delayedIncrement, incrementAsync);
}
function* decrementAsync() {
  yield (0, effects_1.call)(exports.delay, 1000);
  yield (0, effects_1.put)(actions.decrement);
}
exports.decrementAsync = decrementAsync;
function* watchDecrementAsync() {
  yield (0, effects_1.takeEvery)(actions.delayedDecrement, decrementAsync);
}
// rootSaga responsible for starting other sagas in parallel (at the same)
function* rootSaga() {
  yield (0, effects_1.all)([
    helloSaga(),
    watchIncrementAsync(),
    watchDecrementAsync(),
  ]);
}
exports.default = rootSaga;
