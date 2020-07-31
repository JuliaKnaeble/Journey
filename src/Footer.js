import React from "react";
import footer_image from "./Assets/footer_image.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="Footer footer-image"
      style={{ backgroundImage: `url(${footer_image})` }}
    >
      <div>
        <img
          src={require(`./Assets/app_logo.png`)}
          alt=""
          className="footer-logo"
        />
      </div>
      <div className="journey-waits">
        <p>Your Journey awaits you.</p>
      </div>
      <div className="stores">
        <img
          src={require(`./Assets/applestore.png`)}
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
