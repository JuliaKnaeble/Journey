import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background overlay">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
