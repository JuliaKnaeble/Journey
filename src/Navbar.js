import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="main-navigation">
        <p className="brand">
          <span className="logo">
            J<span className="dot-logo">.</span>
          </span>
          <span className="brand-name">Journey</span>
        </p>
        <p className="nav-item">Home</p>
        <p className="nav-item">News</p>
        <p className="nav-item">API</p>
        <p className="nav-item">Download</p>
      </div>
      <button>Download Now</button>
    </nav>
  );
};

export default Navbar;
