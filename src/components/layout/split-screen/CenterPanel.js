import React from "react";
import styled from "styled-components";

const CentralConteriner = styled.div`
  height: 100%;
  background-color: #f9f9fb;
`;

function CenterPanel({ name }) {
  return <CentralConteriner>{name}</CentralConteriner>;
}

export default CenterPanel;
