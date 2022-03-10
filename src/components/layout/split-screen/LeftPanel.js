import React from "react";
import styled from "styled-components";

const LeftContainer = styled.div`
  height: 100%;
  background-color: #fff;
  border-right: 2px solid #f3f3f5;
  margin-top: -2px;
`;

function LeftPanel({ name }) {
  return <LeftContainer>{name}</LeftContainer>;
}

export default LeftPanel;
