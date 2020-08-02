import React from "react";
import "./App.css";
import MainPage from "./MainPage";
import ComingSoon from "./ComingSoon";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact render={(props) => <MainPage {...props} />} />
        <Route
          path="/soon"
          exact
          render={(props) => <ComingSoon {...props} />}
        />
      </Router>
    </div>
  );
}

export default App;
