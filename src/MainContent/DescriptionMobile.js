import React from "react";
import "./DescriptionMobile.css";

const DescriptionMobile = () => {
  return (
    <div>
      <div className="description-mobile-first">
        <div>
          <img
            src={require(`../Assets/explore.png`)}
            alt=""
            className="mobile-start"
          />
        </div>
        <div className="description-indent-first">
          <p className="dot-description-mobile-first"></p>
          <h5 className="header-first">
            Explore neighborhoods with
            <br />
            personalized suggestions
          </h5>
          <p className="paragraph-first">
            Find new places to explore searching the map. We’ll
            <br />
            show you personalized suggestions according to the
            <br />
            places you’ve liked on previous Journies.
          </p>
        </div>
      </div>
      <div className="description-mobile-second">
        <div className="description-indent-second">
          <p className="dot-description-mobile-second"></p>
          <h5 className="header-second">
            Pick and choose the things that
            <br />
            interest you the most
          </h5>
          <p className="paragraph-second">
            See all the details about the places that you find and
            <br />
            quickly add them to your Journey. You can always go
            <br />
            back and move things around.
          </p>
        </div>
        <div>
          <img
            src={require(`../Assets/pick.png`)}
            alt=""
            className="mobile-end"
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionMobile;
