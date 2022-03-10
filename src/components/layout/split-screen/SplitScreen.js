import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
  height: 100%;
`;

function SplitScreen({
  children,
  leftWeight = 1,
  centerWeight = 1,
  rightWeight = 1,
}) {
  const [left, center, right] = children;

  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={centerWeight}>{center}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
}

export default SplitScreen;
