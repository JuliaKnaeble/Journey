import React from "react";
import Navbar from "./Navbar";
import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="ComingSoon">
      <Navbar />
      <h5 className="soon-text">Coming soon</h5>
      <div className="coming-soon-credits">
        <p className="credits">
          © Copyright 2020 | Concept {`&`} Design{" "}
          <a
            href="https://roysherizly.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roy Sherizly
          </a>{" "}
          | Website coded by{" "}
          <a
            href="https://www.linkedin.com/in/julia-knaeble-86309a162/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Julia Knaeble
          </a>
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
