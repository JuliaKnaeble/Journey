import React from "react";
import "./MobileDisplay.css";

const MobileDisplay = (props) => {
  return (
    <div className="MobileDisplay" style={props.style}>
      <div className="carousel-item">
        <img
          src={require(`../Assets/${props.mobileOne}.png`)}
          alt=""
          className="mobile side side-left"
        />
      </div>
      <div className="carousel-item">
        <img
          src={require(`../Assets/${props.mobileTwo}.png`)}
          alt=""
          className="mobile middle"
        />
      </div>
      <div className="carousel-item">
        <img
          src={require(`../Assets/${props.mobileThree}.png`)}
          alt=""
          className="mobile side side-right"
        />
      </div>
    </div>
  );
};

export default MobileDisplay;
