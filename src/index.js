import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import { createStore } from "redux";
import reducers from "./reducers";
import { loadState, saveState } from "./localStorage";

const store = createStore(reducers, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
