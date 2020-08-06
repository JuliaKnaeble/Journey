import React, { useState } from "react";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  const [clicked, setClicked] = useState(false);

  let logo;
  let menuBg;
  let xButton;
  let menu;
  if (clicked) {
    menu = (
      <div className="mobile-menu">
        <img
          src={require(`../Assets/app_logo.png`)}
          alt=""
          className="mobile-menu-items menu-logo"
        />
        <div className="mobile-menu-items menu-item">Home</div>
        <div className="mobile-menu-items">News</div>
        <div className="mobile-menu-items">Api</div>
        <div className="mobile-menu-items">Contact</div>
        <button className="mobile-button">Download Now</button>
      </div>
    );

    xButton = { position: "fixed", left: "85%" };

    menuBg = {
      position: "fixed",
      backgroundColor: "rgba(0,0,0,0.95)",
      top: 0,
      height: "100vh",
      zIndex: 50,
    };

    logo = { display: "none" };
  }

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div>
      <div className="NavbarMobile" style={menuBg}>
        <p className="brand-mobile" style={logo}>
          <span>
            <img
              src={require(`../Assets/app_logo.png`)}
              alt=""
              className="logo-mobile"
            />
          </span>
          <span className="brand-name-mobile">Journey</span>
        </p>
        <img
          src={
            clicked
              ? require(`../Assets/close_x.png`)
              : require(`../Assets/hamburger.png`)
          }
          alt=""
          className="burger-mobile"
          style={xButton}
          onClick={handleClick}
        />
        {menu}
      </div>
    </div>
  );
};

export default NavbarMobile;
