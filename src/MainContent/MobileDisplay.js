import React from "react";
import "./MobileDisplay.scss";

const MobileDisplay = (props) => {
  return (
    <div>
      <div className="MobileDisplay" style={props.style}>
        <div id={props.mobileOne} className="carousel-item">
          <img
            src={require(`../Assets/${props.mobileOne}.png`)}
            alt=""
            className="mobile side"
          />
        </div>
        <div id={props.mobileTwo} className="carousel-item">
          <img
            src={require(`../Assets/${props.mobileTwo}.png`)}
            alt=""
            className="mobile middle"
          />
        </div>
        <div id={props.mobileThree} className="carousel-item">
          <img
            src={require(`../Assets/${props.mobileThree}.png`)}
            alt=""
            className="mobile side"
          />
        </div>
      </div>
      <div className="controls">
        <a href={`#${props.mobileOne}`} className="controls-dot">
          <span></span>
        </a>
        <a href={`#${props.mobileTwo}`} className="controls-dot">
          <span></span>
        </a>
        <a href={`#${props.mobileThree}`} className="controls-dot">
          <span></span>
        </a>
      </div>
    </div>
  );
};

export default MobileDisplay;
