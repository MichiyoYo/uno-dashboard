import React from "react";
import styled from "styled-components";

const CentralConteriner = styled.div`
  height: 100%;
`;

function CenterPanel({ name }) {
  return (
    <CentralConteriner style={{ backgroundColor: "purple" }}>
      {name}
    </CentralConteriner>
  );
}

export default CenterPanel;
