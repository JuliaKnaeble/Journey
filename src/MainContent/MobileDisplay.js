import React from "react";
import "./MobileDisplay.css";

const MobileDisplay = (props) => {
  return (
    <div className="MobileDisplay" style={props.style}>
      <img
        src={require(`../Assets/${props.mobileOne}.png`)}
        alt=""
        className="mobile side side-left"
      />
      <img
        src={require(`../Assets/${props.mobileTwo}.png`)}
        alt=""
        className="mobile middle"
      />
      <img
        src={require(`../Assets/${props.mobileThree}.png`)}
        alt=""
        className="mobile side side-right"
      />
    </div>
  );
};

export default MobileDisplay;
