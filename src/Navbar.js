import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
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
        <Link className="nav-item" to="/">
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
        <button>Download Now</button>
      </Link>
    </nav>
  );
};

export default Navbar;
