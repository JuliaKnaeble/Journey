import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer" id="footer">
      <div>
        <img
          src={require(`./Assets/footer_logo.png`)}
          alt=""
          className="footer-logo"
        />
      </div>
      <div>
        <p className="journey-waits">Your Journey awaits you.</p>
      </div>
      <div className="stores">
        <img
          src={require(`./Assets/googleplay.png`)}
          alt=""
          className="google"
        />
        <img
          src={require(`./Assets/applestore.png`)}
          alt=""
          className="apple"
        />
      </div>
      <div>
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

export default Footer;
