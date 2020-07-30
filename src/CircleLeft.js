import React from "react";
import "./CircleLeft.css";

const CircleLeft = (props) => {
  return (
    <div className="circle-container-three" style={props.main}>
      <div className="circle-three"></div>
      <div className="clircle-center-three" style={props.center}></div>
    </div>
  );
};

export default CircleLeft;
