import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="Map">
      <div>
        <p className="dot-map"></p>
        <h4 className="header-map">It all starts with a good plan</h4>
        <p className="text-map">
          A clear visualization of the day’s path is important
          <br />
          for planning out your stops and making sure you
          <br />
          get to all your destinations. Journey will even let you
          <br />
          know if there are any problems along your route.
        </p>
      </div>
      <div>
        <img src={require(`./Assets/map.png`)} alt="" className="image-map" />
      </div>
    </div>
  );
};

export default Map;
