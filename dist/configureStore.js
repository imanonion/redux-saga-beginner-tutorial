"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const redux_saga_1 = __importDefault(require("redux-saga"));
const reducers_1 = require("./reducers");
const sagas_1 = __importDefault(require("./sagas"));
// Create the saga middleware
const sagaMiddleware = (0, redux_saga_1.default)();
const middleware = [sagaMiddleware];
// Mount it on the Store
const store = (0, toolkit_1.configureStore)({
    reducer: reducers_1.reducers.counter,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});
// Then run the saga
sagaMiddleware.run(sagas_1.default);
