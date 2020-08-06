import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <h1>Planning a journey has never been easier.</h1>
        <h2>
          Collaborate with friends and plan your next journey from start to
          finish.
        </h2>
        <Link className="try" to="paragraph-one" smooth={true} duration={1000}>
          <span>
            {" "}
            <img
              src={require(`../Assets/arrow_circle.png`)}
              alt=""
              className="try-arrow"
            />
          </span>
          <span className="try-now">
            <span>See more features</span>
          </span>
        </Link>
      </div>
      <div>
        <img
          src={"https://i.imgur.com/GHRmxdJ.png"}
          alt=""
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Header;
