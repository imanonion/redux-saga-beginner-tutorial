import { counterTypes, CounterActions } from "./counterTypes";

export default function counter(state: number = 0, action: CounterActions) {
  switch (action.type) {
    case counterTypes.INCREMENT:
      return state + 1;
    // from original sample project, not needed here..
    // // case counterTypes.INCREMENT_IF_ODD:
    // //  return state % 2 !== 0 ? state + 1 : state;
    case counterTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
