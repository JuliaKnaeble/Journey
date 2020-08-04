import React from "react";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  return (
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
        src={require(`../Assets/hamburger.png`)}
        alt=""
        className="burger-mobile"
      />
    </div>
  );
};

export default NavbarMobile;
