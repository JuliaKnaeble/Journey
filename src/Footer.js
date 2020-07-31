import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
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
    </div>
  );
};

export default Footer;
