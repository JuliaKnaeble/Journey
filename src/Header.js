import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div>
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
        <p className="try">
          <span>
            {" "}
            <img
              src={require(`./Assets/arrow_circle.png`)}
              alt=""
              className="try-arrow"
            />
          </span>
          <span className="try-now">See more features</span>
        </p>
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
