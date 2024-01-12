
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { MobXProviderContext } from "mobx-react";
import App from "./App";

import appStore from './store/Store.jsx';

ReactDOM.render(
  <Router>
    <MobXProviderContext.Provider value={appStore}>
      <App />
    </MobXProviderContext.Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
