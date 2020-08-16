import React from "react";
import "./App.scss";
import MainPage from "./MainContent/MainPage";
import ComingSoon from "./ComingSoon";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact render={(props) => <MainPage {...props} />} />
        <Route
          path="/coming/soon"
          exact
          render={(props) => <ComingSoon {...props} />}
        />
      </Router>
    </div>
  );
}

export default App;
