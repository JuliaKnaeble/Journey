import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import background from "./Assets/background.jpg";
import Paragraph from "./Paragraph";
import MobileDisplay from "./MobileDisplay";
import Map from "./Map";
import CircleRight from "./CircleRight";
import DescriptionMobile from "./DescriptionMobile";
import CircleLeft from "./CircleLeft";
import "./App.css";

function App() {
  let circleLeftOne = {
    width: `1130px`,
    height: `1130px`,
  };

  let innerCircleOne = {
    backgroundColor: `#0a0b10`,
  };

  let circleContainerThree = {
    width: `800px`,
    height: `800px`,
  };

  let clircleCenterThree = {
    backgroundColor: `#f8f9fa`,
  };

  return (
    <div className="App">
      <div
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Navbar />
        <Header />
      </div>
      <Paragraph
        header={`Multiple ways to view your Journey`}
        paragraph={`Easily navigate between views to get the best idea of how your Journey is laid out.\nView your entire itinerary, dive into a specific day or use the calendar view to make\nsure you have time to do everything you planned.`}
      />
      <MobileDisplay
        mobileOne={`left`}
        mobileTwo={`middle`}
        mobileThree={`right`}
      />
      <CircleRight />
      <Map />
      <div className="DescriptionMobile">
        <DescriptionMobile />
      </div>
      <CircleLeft main={circleLeftOne} center={innerCircleOne} />
      <Paragraph
        header={`Get a head start on your next Journey`}
        paragraph={`Browse a huge collection of Journies that other people have been on. Check out exactly where\nthey visited and use only the parts that you want. You can even share your own.`}
      />
      <MobileDisplay
        mobileOne={`venice`}
        mobileTwo={`tokyo`}
        mobileThree={`thailand`}
      />
      <CircleLeft main={circleContainerThree} center={clircleCenterThree} />
    </div>
  );
}

export default App;
