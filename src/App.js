import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Paragraph from "./Paragraph";
import MobileDisplay from "./MobileDisplay";
import Map from "./Map";
import CircleRight from "./CircleRight";
import DescriptionMobile from "./DescriptionMobile";
import CircleLeft from "./CircleLeft";
import Footer from "./Footer";
import "./App.css";

function App() {
  let circleRightOne = {
    width: `1020px`,
    height: `1020px`,
  };

  let circleRightTwo = {
    width: `820px`,
    height: `820px`,
  };

  return (
    <div className="App">
      <div className="header-background">
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
      <CircleRight mainSize={circleRightOne} />
      <Map />
      <div className="DescriptionMobile">
        <DescriptionMobile />
      </div>
      <CircleLeft />
      <Paragraph
        header={`Get a head start on your next Journey`}
        paragraph={`Browse a huge collection of Journies that other people have been on. Check out exactly where\nthey visited and use only the parts that you want. You can even share your own.`}
      />
      <CircleRight mainSize={circleRightTwo} />
      <MobileDisplay
        mobileOne={`venice`}
        mobileTwo={`tokyo`}
        mobileThree={`thailand`}
      />
      <div className="footer-bg">
        <Footer />
      </div>
    </div>
  );
}

export default App;
