import React from "react";
import styled from "styled-components";
import logo from "../../img/unoai.png";
import SplitScreen from "../layout/split-screen/SplitScreen";
import ToolBar from "./ToolBar";
import UserInfo from "./UserInfo";

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    width: 100px;
    height: auto;
  }
`;

function Header(props) {
  return (
    <SplitScreen children leftWeight={1} centerWeight={3} rightWeight={1}>
      <Logo>
        <img src={logo} alt="Uno.ai Logo" />
      </Logo>
      <ToolBar />
      <UserInfo />
    </SplitScreen>
  );
}

export default Header;