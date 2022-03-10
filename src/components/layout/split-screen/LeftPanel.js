import React from "react";
import styled from "styled-components";

const LeftContainer = styled.div`
  height: 100%;
`;

function LeftPanel({ name }) {
  return (
    <LeftContainer style={{ backgroundColor: "blue" }}>{name}</LeftContainer>
  );
}

export default LeftPanel;
