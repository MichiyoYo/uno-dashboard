import React from "react";
import styled from "styled-components";

import List from "../lists/List";
import { totals } from "../../../resources";
import TotalListItem from "../lists/totals/TotalListItem";

const CentralConteriner = styled.div`
  height: 100%;
  background-color: #f9f9fb;
  padding: 40px;
  .totals {
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
`;

function CenterPanel({ name }) {
  return (
    <CentralConteriner>
      <div className="totals">
        <List
          items={totals}
          resourceName="totalItem"
          itemComponent={TotalListItem}
        />
      </div>
    </CentralConteriner>
  );
}

export default CenterPanel;
