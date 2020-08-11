import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  const [clicked, setClicked] = useState(false);
  const history = useHistory();
  document.body.style.overflow = "visible";

  let menu;
  if (clicked) {
    document.body.style.overflow = "hidden";
    menu = (
      <div className="mobile-menu">
        <img
          src={require(`../Assets/app_logo.png`)}
          alt=""
          className="menu-logo"
          onClick={() => setClicked(!clicked) & history.push("/")}
        />
        <div
          className="mobile-menu-items"
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
