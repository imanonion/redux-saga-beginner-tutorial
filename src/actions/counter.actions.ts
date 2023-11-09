import { createAction } from "@reduxjs/toolkit";

const PREFIX = "counter";

/**
 * Define action creators using createAction
 * Action creators are functions that create and return an action object so that we don't have to write the action object by hand everytime
 */
export const increment = createAction(`${PREFIX}/increment`);
export const decrement = createAction(`${PREFIX}/decrement`);
export const delayedIncrement = createAction(`${PREFIX}/delayedIncrement`);
export const delayedDecrement = createAction(`${PREFIX}/delayedDecrement`);
