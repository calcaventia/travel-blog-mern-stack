import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducers, // Assuming reducers is an object combining multiple reducers
  middleware: [thunk], // You can add middleware directly in configureStore
  devTools: process.env.NODE_ENV !== "production", // Optional: Enable dev tools in non-production environments
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
