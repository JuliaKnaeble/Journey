import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./NavbarDesktop.scss";

const NavbarDesktop = () => {
  const [activeHome, setActiveHome] = useState({});
  const [activeNews, setActiveNews] = useState({});
  const [activeApi, setActiveApi] = useState({});
  const history = useHistory();

  function handleButtonClick() {
    setActiveHome({});
    setActiveNews({});
    setActiveApi({});
  }

  function handleHomeClick() {
    setActiveHome({ color: "#ff4e21" });
    setActiveNews({});
    setActiveApi({});
  }

  function handleHomeFromLogo() {
    setActiveHome({ color: "#ff4e21" });
    setActiveNews({});
    setActiveApi({});
  }

  function handleClickNews() {
    setActiveNews({ color: "#ff4e21" });
    setActiveHome({});
    setActiveApi({});
  }

  function handleClickContact() {
    history.push("/");
    setActiveHome({});
    setActiveNews({});
    setActiveApi({});
  }

  function handleClickApi() {
    setActiveApi({ color: "#ff4e21" });
    setActiveHome({});
    setActiveNews({});
  }

  return (
    <nav className="Navbar">
      <div className="main-navigation">
        <Link to="/" onClick={handleHomeFromLogo}>
          <p className="brand">
            <span>
              <img
                src={require(`../Assets/app_logo.png`)}
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
        <Link
          to="/coming/soon"
          className="nav-item"
          onClick={handleClickNews}
          style={activeNews}
        >
          News
        </Link>
        <Link
          to="/coming/soon"
          className="nav-item"
          onClick={handleClickApi}
          style={activeApi}
        >
          API
        </Link>
        <ScrollLink
          className="nav-item"
          to="footer"
          smooth={true}
          duration={1000}
          onClick={handleClickContact}
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

export default NavbarDesktop;
