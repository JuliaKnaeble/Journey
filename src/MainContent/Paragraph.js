import React from "react";
import "./Paragraph.css";

const Paragraph = (props) => {
  return (
    <div className="Paragraph" id={props.id}>
      <p className="dot-paragraph top"></p>
      <h3 className="header-paragraph">{props.header}</h3>
      <p className="text-paragraph">{props.paragraph}</p>
      <p className="dot-paragraph bottom"></p>
    </div>
  );
};

export default Paragraph;
