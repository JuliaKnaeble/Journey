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
    setActiveHome({});
  }

  function handleHomeClick() {
    setActiveHome({ color: "#ff4e21" });
  }

  return (
    <nav className="Navbar">
      <div className="main-navigation">
        <Link to="/">
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
        </Link>
        <Link
          to="/"
          className="nav-item"
          onClick={handleHomeClick}
          style={activeHome}
        >
          {" "}
          Home
        </Link>
        <Link to="/coming/soon" className="nav-item">
          News
        </Link>
        <Link to="/coming/soon" className="nav-item">
          API
        </Link>
        <ScrollLink
          className="nav-item"
          to="footer"
          smooth={true}
          duration={1000}
        >
          Contact
        </ScrollLink>
      </div>
      <Link to="/coming/soon">
        <button onClick={handleButtonClick}>Download Now</button>
      </Link>
    </nav>
  );
};

export default Navbar;
