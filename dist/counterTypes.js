"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.counterTypes = void 0;
const PREFIX = "counter";
/**
 * Object to hold the counter types
 */
exports.counterTypes = {
  INCREMENT: `${PREFIX}/INCREMENT`,
  DECREMENT: `${PREFIX}/DECREMENT`,
  INCREMENT_ASYNC: `${PREFIX}/INCREMENT_ASYNC`,
  DECREMENT_ASYNC: `${PREFIX}/DECREMENT_ASYNC`,
};
