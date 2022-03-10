import React from "react";
import { IconButton } from "@mui/material";
import styled from "react";

const ToolBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

function ToolBar(props) {
  return (
    <ToolBarContainer>
      <h1>Dashboard</h1>
      <ButtonGroup>
        <IconButton></IconButton>
      </ButtonGroup>
    </ToolBarContainer>
  );
}

export default ToolBar;
