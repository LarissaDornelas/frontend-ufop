import React from "react";
import "./styles.scss";

import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" />
    </div>
  );
};

export { Header };
