import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ComingSoon from "./ComingSoon";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/soon" exact component={ComingSoon} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
