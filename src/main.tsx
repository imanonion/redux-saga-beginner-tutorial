import "@babel/polyfill";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import Counter from "./Counter";
import reducer from "./reducers/counter.reducers";
import rootSaga from "./sagas/counter.sagas";
import {
  decrement,
  increment,
  delayedDecrement,
  delayedIncrement,
} from "./actions";

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

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Counter
        value={store.getState().count}
        onIncrement={() => store.dispatch(increment())}
        onDecrement={() => store.dispatch(decrement())}
        onIncrementAsync={() => store.dispatch(delayedIncrement())}
        onDecrementAsync={() => store.dispatch(delayedDecrement())}
      />
    </Provider>,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
