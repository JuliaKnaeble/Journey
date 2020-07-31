import React from "react";
import "./CircleRight.css";

const CircleRight = (props) => {
  return (
    <div className="circle-container" style={props.mainSize}>
      <div className="circle"></div>
      <div className="clircle-center"></div>
    </div>
  );
};

export default CircleRight;
