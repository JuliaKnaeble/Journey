import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  let menuBg;
  menuBg = {
    backdropFilter: "blur(5px)",
    position: "fixed",
    backgroundColor: "rgba(0,0,0,0.6)",
    top: 0,
    height: "100vh",
    width: "100vh",
    zIndex: 10,
  };

  let menu;
  if (clicked) {
    menu = (
      <div className="mobile-menu" style={menuBg}>
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
  }

  return (
    <div>
      <div className="NavbarMobile">
        <p className="brand-mobile">
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
          onClick={() => setClicked(!clicked)}
        />
        {menu}
      </div>
    </div>
  );
};

export default NavbarMobile;
