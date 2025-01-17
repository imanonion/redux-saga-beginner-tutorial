import test from "tape";
import { put, call } from "redux-saga/effects";
import { delay, incrementAsync } from "./counter.sagas";
import * as actions from "../actions";

test("incrementAsync Saga test", (assert) => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    "incrementAsync saga must call delay(1000)"
  );

  assert.deepEqual(
    gen.next().value,
    put(actions.increment()),
    "incrementAsync Saga must dispatch an INCREMENT action"
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "incrementAsync Saga must be done"
  );

  assert.end();
});
