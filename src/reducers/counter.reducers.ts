import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../actions/index";

/**
 * Define counter state interface
 */
interface ICounterState {
  count: number;
}

/**
 * Define initial counter state
 */
export const initialState: ICounterState = {
  count: 0,
};

/**
 * create reducer
 */
export default createReducer(initialState, (builder) =>
  builder
    .addCase(actions.increment, (state) => {
      state.count += 1;
    })
    .addCase(actions.decrement, (state) => {
      state.count -= 1;
    })
);
