import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import background from "./Assets/background.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
