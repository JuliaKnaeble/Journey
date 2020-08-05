import React, { useState } from "react";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  const [clicked, setClicked] = useState(false);

  let menu;
  if (clicked) {
    menu = (
      <div className="mobile-menu">
        <img
          src={require(`../Assets/app_logo.png`)}
          alt=""
          className="mobile-menu-items menu-logo"
        />
        <div className="mobile-menu-items">Home</div>
        <div className="mobile-menu-items">News</div>
        <div className="mobile-menu-items">Api</div>
        <div className="mobile-menu-items">Contact</div>
      </div>
    );
  }

  function handleClick() {
    setClicked(!clicked);
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
          onClick={handleClick}
        />
        {menu}
      </div>
    </div>
  );
};

export default NavbarMobile;
