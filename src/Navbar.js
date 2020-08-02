import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [activeHome, setActiveHome] = useState({
    color: "#ff4e21",
    cursor: "default",
  });

  function handleButtonClick() {
    setActiveHome({ color: "#ffffff" });
  }

  function handleHomeClick() {
    setActiveHome({ color: "#ff4e21", cursor: "default" });
  }

  return (
    <nav className="Navbar">
      <div className="main-navigation">
        <p className="brand">
          <span>
            <img
              src={require(`./Assets/app_logo.png`)}
              alt=""
              className="logo"
            />
          </span>
          <span className="brand-name">Journey</span>
        </p>
        <Link
          onClick={handleHomeClick}
          className="nav-item"
          style={activeHome}
          to="/"
        >
          Home
        </Link>
        <p className="nav-item">News</p>
        <p className="nav-item">API</p>
        <ScrollLink
          className="nav-item"
          to="footer"
          smooth={true}
          duration={1000}
        >
          Contact
        </ScrollLink>
      </div>
      <Link to="/soon">
        <button onClick={handleButtonClick}>Download Now</button>
      </Link>
    </nav>
  );
};

export default Navbar;
