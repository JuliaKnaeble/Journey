import React, { useState } from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import MobileDisplay from "./MobileDisplay";
import Map from "./Map";
import CircleRight from "./CircleRight";
import DescriptionMobile from "./DescriptionMobile";
import CircleLeft from "./CircleLeft";
import Footer from "./Footer";
import "./MainPage.css";

function MainPage() {
  let circleRightOne = {
    width: `1020px`,
    height: `1020px`,
  };

  let circleRightTwo = {
    width: `820px`,
    height: `820px`,
  };

  const [opacityOne, setOpacityOne] = useState({ opacity: 0.2 });
  const [opacityTwo, setOpacityTwo] = useState({ opacity: 0.5 });

  function showContentOne() {
    setOpacityOne({ opacity: 1 });
  }

  function showContentTwo() {
    setOpacityTwo({ opacity: 1 });
  }

  return (
    <div className="App">
      <div className="header-background">
        <Header />
      </div>
      <div onMouseEnter={showContentOne}>
        <Paragraph
          id={"paragraph-one"}
          header={`Multiple ways to view your Journey`}
          paragraph={`Easily navigate between views to get the best idea of how your Journey is laid out.\nView your entire itinerary, dive into a specific day or use the calendar view to make\nsure you have time to do everything you planned.`}
        />
        <MobileDisplay
          style={opacityOne}
          mobileOne={`left`}
          mobileTwo={`middle`}
          mobileThree={`right`}
        />
      </div>
      <CircleRight mainSize={circleRightOne} />
      <Map />
      <div className="DescriptionMobile">
        <DescriptionMobile />
      </div>
      <CircleLeft />
      <div onMouseEnter={showContentTwo}>
        <Paragraph
          id={"paragraph-two"}
          header={`Get a head start on your next Journey`}
          paragraph={`Browse a huge collection of Journies that other people have been on. Check out exactly where\nthey visited and use only the parts that you want. You can even share your own.`}
        />
        <CircleRight mainSize={circleRightTwo} />
        <MobileDisplay
          style={opacityTwo}
          mobileOne={`venice`}
          mobileTwo={`tokyo`}
          mobileThree={`thailand`}
        />
      </div>
      <div className="footer-bg">
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
