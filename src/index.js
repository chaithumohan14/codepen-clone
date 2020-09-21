import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./context";
import { initState, reducer } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <Provider initialState={initState} reducer={reducer}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
