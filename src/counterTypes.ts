export enum counterTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  INCREMENT_ASYNC = "INCREMENT_ASYNC",
}

export type CounterActions =
  | { type: counterTypes.DECREMENT }
  | { type: counterTypes.INCREMENT }
  | { type: counterTypes.INCREMENT_ASYNC };
