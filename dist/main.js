"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("@babel/polyfill");
const react_dom_1 = __importDefault(require("react-dom"));
const react_redux_1 = require("react-redux");
const toolkit_1 = require("@reduxjs/toolkit");
const redux_saga_1 = __importDefault(require("redux-saga"));
const Counter_1 = __importDefault(require("./Counter"));
const counter_reducers_1 = __importDefault(require("./reducers/counter.reducers"));
const counter_sagas_1 = __importDefault(require("./sagas/counter.sagas"));
const actions_1 = require("./actions");
// Create the saga middleware
const sagaMiddleware = (0, redux_saga_1.default)();
const middleware = [sagaMiddleware];
// Mount it on the Store
const store = (0, toolkit_1.configureStore)({
    reducer: counter_reducers_1.default,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});
// Then run the saga
sagaMiddleware.run(counter_sagas_1.default);
function render() {
<<<<<<< HEAD
    react_dom_1.default.render((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store, children: (0, jsx_runtime_1.jsx)(Counter_1.default, { value: store.getState().count, onIncrement: () => store.dispatch((0, actions_1.increment)()), onDecrement: () => store.dispatch((0, actions_1.decrement)()), onIncrementAsync: () => store.dispatch((0, actions_1.delayedIncrement)()), onDecrementAsync: () => store.dispatch((0, actions_1.delayedDecrement)()) }) }), document.getElementById("root"));
=======
    react_dom_1.default.render((0, jsx_runtime_1.jsx)(Counter_1.default, { value: store.getState(), onIncrement: () => action("INCREMENT"), onDecrement: () => action("DECREMENT"), onIncrementAsync: () => action("INCREMENT_ASYNC"), onDecrementAsync: () => action("DECREMENT_ASYNC") }), document.getElementById("root"));
>>>>>>> master
}
render();
store.subscribe(render);
