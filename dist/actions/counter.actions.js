"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayedDecrement = exports.delayedIncrement = exports.decrement = exports.increment = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const PREFIX = "counter";
/**
 * Define action creators using createAction
 * Action creators are functions that create and return an action object so that we don't have to write the action object by hand everytime
 */
exports.increment = (0, toolkit_1.createAction)(`${PREFIX}/increment`);
exports.decrement = (0, toolkit_1.createAction)(`${PREFIX}/decrement`);
exports.delayedIncrement = (0, toolkit_1.createAction)(`${PREFIX}/delayedIncrement`);
exports.delayedDecrement = (0, toolkit_1.createAction)(`${PREFIX}/delayedDecrement`);
