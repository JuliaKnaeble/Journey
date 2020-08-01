import React from "react";
import { Link } from "react-scroll";
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
        <p className="nav-item">Home</p>
        <p className="nav-item">News</p>
        <p className="nav-item">API</p>
        <Link className="nav-item" to="footer" smooth={true} duration={1000}>
          Contact
        </Link>
      </div>
      <button>Download Now</button>
    </nav>
  );
};

export default Navbar;
