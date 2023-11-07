export const CounterTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREMENT_ASYNC: "INCREMENT_ASYNC",
} as const;

export type CounterAction = keyof typeof CounterTypes;

export type CounterActions = Record<"type", CounterAction>;
