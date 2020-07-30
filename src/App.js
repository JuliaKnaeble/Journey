import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import background from "./Assets/background.jpg";
import Paragraph from "./Paragraph";
import MobileDisplay from "./MobileDisplay";
import Map from "./Map";
import Circle from "./Circle";
import DescriptionMobile from "./DescriptionMobile";
import CircleLeft from "./CircleLeft";
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
      <Paragraph />
      <MobileDisplay />
      <Circle />
      <Map />
      <div className="DescriptionMobile">
        <DescriptionMobile />
      </div>
      <CircleLeft />
      <Paragraph />
      <MobileDisplay />
    </div>
  );
}

export default App;
