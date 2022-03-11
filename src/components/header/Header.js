import React from "react";
import styled from "styled-components";
import logo from "../../img/unoai.png";
import SplitScreen from "../layout/split-screen/SplitScreen";
import ToolBar from "./ToolBar";
import UserInfo from "./UserInfo";
import { currentUser } from "../../resources";

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    width: 80px;
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
      <UserInfo currentUser={currentUser} />
    </SplitScreen>
  );
}

export default Header;
