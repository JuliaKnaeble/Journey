import React from "react";
import "./Header.css";

const Header = () => {
  //const spans = document.querySelectorAll('.word span');

  //spans.forEach((span, idx) => {
  // span.addEventListener('click', (e) => {
  //    e.target.classList.add('active');
  // });
  // span.addEventListener('animationend', (e) => {
  //   e.target.classList.remove('active');
  //  });

  // Initial animation
  // setTimeout(() => {
  //    span.classList.add('active');
  //  }, 750 * (idx + 1))
  // });

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
          <span className="try-now">
            <span>See</span> <span>more</span> <span>features</span>
          </span>
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
