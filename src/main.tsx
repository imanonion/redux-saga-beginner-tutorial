import "@babel/polyfill";

import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import Counter from "./Counter";
import reducer from "./reducers";
import rootSaga from "./sagas";
import { counterTypes } from "./counterTypes";

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

const action = (type: counterTypes) => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action(counterTypes.INCREMENT)}
      onDecrement={() => action(counterTypes.DECREMENT)}
      onIncrementAsync={() => action(counterTypes.INCREMENT_ASYNC)}
    />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
