import React from "react";
import styled from "styled-components";

const RightContainer = styled.div`
  height: 100%;
`;

function RightPanel({ name }) {
  return (
    <RightContainer style={{ backgroundColor: "red" }}>{name}</RightContainer>
  );
}

export default RightPanel;
