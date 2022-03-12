import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TotalLi = styled.li`
  flex: 1 0 25%;
  width: fit-content;
  max-width: fit-content;
  .card {
    border-radius: 10px;
    border: 2px solid #f3f3f5;
    box-shadow: 4px 4px 20px #eee;
    padding: 10px;
    .card-content {
      padding: 10px;
      display: flex;
      flex-direction: column;
    }
  }
`;

function TotalListItem({ totalItem }) {
  const { amount, type, percentage, icon } = totalItem;

  return (
    <TotalLi className="total">
      <Card className="card last-shipped-card">
        <CardContent className="card-content">
          <div className="total_header">
            <FontAwesomeIcon className="total_header_icon" icon={icon} />
            <p className="total_header_percentage">{percentage}</p>
          </div>
          <div className="total_footer">
            <h4 className="total_footer_amount">{amount}</h4>
            <p className="total_footer_type">Total {type}</p>
          </div>
        </CardContent>
      </Card>
    </TotalLi>
  );
}

export default TotalListItem;
