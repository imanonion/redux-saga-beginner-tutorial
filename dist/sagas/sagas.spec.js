"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const effects_1 = require("redux-saga/effects");
const counter_sagas_1 = require("./counter.sagas");
const actions = __importStar(require("../actions"));
(0, tape_1.default)("incrementAsync Saga test", (assert) => {
    const gen = (0, counter_sagas_1.incrementAsync)();
    assert.deepEqual(gen.next().value, (0, effects_1.call)(counter_sagas_1.delay, 1000), "incrementAsync saga must call delay(1000)");
    assert.deepEqual(gen.next().value, (0, effects_1.put)(actions.increment), "incrementAsync Saga must dispatch an INCREMENT action");
    assert.deepEqual(gen.next(), { done: true, value: undefined }, "incrementAsync Saga must be done");
    assert.end();
});
