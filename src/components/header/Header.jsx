import React from "react";
import { AppBar } from "@material-ui/core";
import { HeaderContainer, Heading } from "./style/Header";
const Header = () => (
  <AppBar position="static">
    <HeaderContainer>
      <Heading to={"/"}>Movie Collection</Heading>
    </HeaderContainer>
  </AppBar>
);
export default Header;
