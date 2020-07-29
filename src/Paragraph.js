import React from "react";
import "./Paragraph.css";

const Paragraph = () => {
  return (
    <div className="Paragraph">
      <p className="dot-decoration top"></p>
      <h3 className="header">Multiple ways to view your Journey</h3>
      <p className="header-paragraph">
        Easily navigate between views to get the best idea of how your Journey
        is laid out.
        <br />
        View your entire itinerary, dive into a specific day or use the calendar
        view to make
        <br />
        sure you have time to do everything you planned.
      </p>
      <p className="dot-decoration bottom"></p>
    </div>
  );
};

export default Paragraph;
