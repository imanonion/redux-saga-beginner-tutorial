import "@babel/polyfill";

import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import Counter from "./Counter";
import reducer from "./reducers";
import rootSaga from "./sagas";
import { CounterActions, CounterTypes, CounterAction } from "./counterTypes";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
// Mount it on the Store
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

// Then run the saga
sagaMiddleware.run(rootSaga);

const action = (type: CounterAction) => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action(CounterTypes.INCREMENT)}
      onDecrement={() => action(CounterTypes.DECREMENT)}
      onIncrementAsync={() => action(CounterTypes.INCREMENT_ASYNC)}
    />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
