import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TotalLi = styled.li`
  flex: 1 0 25%;
  width: fit-content;
  max-width: 23%;
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

const TotalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .total_header_icon {
    padding: 13px;
    border-radius: 50%;
    &.balance {
      color: #1976d2;
      background: #ebf3ff;
    }
    &.sales {
      color: #fd9c3f;
      background: #fef4e9;
    }
    &.expense {
      color: #565cfd;
      background: #ebecff;
    }
    &.visitors {
      color: #85a8ff;
      background: #f0f4ff;
    }
  }
`;

const TotalFooter = styled.div``;

function TotalListItem({ totalItem }) {
  const { amount, type, percentage, icon } = totalItem;

  return (
    <TotalLi className="total">
      <Card className="card last-shipped-card">
        <CardContent className="card-content">
          <TotalHeader className="total_header">
            <FontAwesomeIcon
              className={`total_header_icon ${type}`}
              icon={icon}
            />
            <p className="total_header_percentage">{percentage}</p>
          </TotalHeader>
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
