import React from "react";
import "./MobileDisplay.css";

const MobileDisplay = () => {
  return (
    <div className="MobileDisplay">
      <img
        src={require(`./Assets/first_left_phone@2x.png`)}
        alt=""
        className="mobile side"
      />
      <img
        src={require(`./Assets/first_middle_phone@2x.png`)}
        alt=""
        className="mobile middle"
      />
      <img
        src={require(`./Assets/first_right_phone@2x.png`)}
        alt=""
        className="mobile side"
      />
    </div>
  );
};

export default MobileDisplay;
