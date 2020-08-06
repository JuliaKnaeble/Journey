import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

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
          onClick={() => setClicked(!clicked) & history.push("/")}
        />
        <div
          className="mobile-menu-items menu-item"
          onClick={() => setClicked(!clicked) & history.push("/")}
        >
          Home
        </div>
        <div className="mobile-menu-items">News</div>
        <div className="mobile-menu-items">Api</div>
        <div className="mobile-menu-items">Contact</div>
        <button
          className="mobile-button"
          onClick={() => setClicked(!clicked) & history.push("/coming/soon")}
        >
          Download Now
        </button>
      </div>
    );

    xButton = { position: "fixed", left: "45%" };

    menuBg = {
      backdropFilter: "blur(5px)",
      position: "fixed",
      backgroundColor: "rgba(0,0,0,0.6)",
      top: 0,
      height: "100vh",
      width: "100vh",
      zIndex: 20,
    };

    logo = { display: "none" };
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
          onClick={() => setClicked(!clicked)}
        />
        {menu}
      </div>
    </div>
  );
};

export default NavbarMobile;
