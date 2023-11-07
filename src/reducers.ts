import { CounterTypes, CounterActions } from "./counterTypes";

export default function counter(state: number = 0, action: CounterActions) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
