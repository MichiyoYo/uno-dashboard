import React from "react";
import styled from "styled-components";

const RightContainer = styled.div`
  height: 100%;
  background-color: #f9f9fb;
`;

function RightPanel({ name }) {
  return <RightContainer>{name}</RightContainer>;
}

export default RightPanel;
