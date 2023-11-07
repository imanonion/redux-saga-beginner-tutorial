"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDecrementAsync,
}) =>
  (0, jsx_runtime_1.jsxs)("div", {
    children: [
      (0, jsx_runtime_1.jsx)("h1", { children: "Counter" }),
      (0, jsx_runtime_1.jsxs)("p", { children: ["Value: ", value] }),
      (0, jsx_runtime_1.jsxs)("div", {
        children: [
          (0, jsx_runtime_1.jsx)("button", {
            onClick: onIncrement,
            children: "Increment",
          }),
          " ",
          (0, jsx_runtime_1.jsx)("button", {
            onClick: onIncrementAsync,
            children: "Increment after 1 second",
          }),
          " ",
        ],
      }),
      (0, jsx_runtime_1.jsxs)("div", {
        children: [
          (0, jsx_runtime_1.jsx)("button", {
            onClick: onDecrement,
            children: "Decrement",
          }),
          " ",
          (0, jsx_runtime_1.jsx)("button", {
            onClick: onDecrementAsync,
            children: "Decrement after 1 second",
          }),
        ],
      }),
      (0, jsx_runtime_1.jsx)("hr", {}),
    ],
  });
exports.default = Counter;
