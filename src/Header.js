import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        Planning a journey
        <br />
        has never been easier.
      </h1>
      <h2>
        Collaborate with friends and plan your next journey
        <br />
        from start to finish.
      </h2>
      <p>
        <span className="try-arrow">↓</span>
        <span className="try-now">Try Journey for free</span>
      </p>
    </div>
  );
};

export default Header;
