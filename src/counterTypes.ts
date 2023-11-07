/**
 * Object to hold the counter types
 */
export const counterTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREMENT_ASYNC: "INCREMENT_ASYNC",
  DECREMENT_ASYNC: "DECREMENT_ASYNC",
} as const;

/**
 * for use in Counter in main.tsx
 */

export type CounterAction = keyof typeof counterTypes;

/**
 * for use in reducer as it requires "type" property
 */
export type CounterActions = { type: CounterAction };
