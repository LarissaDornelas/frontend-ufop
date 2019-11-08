import React from "react";
import { HeaderContainer } from "./styles";

import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
    </HeaderContainer>
  );
};

export { Header };
