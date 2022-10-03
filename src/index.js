import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./components/redux/reducers";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

let reactStore = configureStore({ reducer: allReducers });
window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION();
root.render(
  <React.StrictMode>
    <Provider store={reactStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
