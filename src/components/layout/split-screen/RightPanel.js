import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import List from "../lists/List";
import { lastShipped, topSales } from "../../../resources";
import LastShippedListItem from "../lists/last-shipped/LastShippedListItem";
import TopSalesListItem from "../lists/top-sales/TopSalesListItem";

const RightContainer = styled.div`
  height: 100%;
  background-color: #f9f9fb;
  padding: 40px;
  padding-left: 0;
  .card {
    border-radius: 10px;
    border: 2px solid #f3f3f5;
    box-shadow: 4px 4px 20px #eee;
    padding: 10px;
    margin-bottom: 20px;
    .card-content {
      padding: 10px;
      display: flex;
      flex-direction: column;
      .card-content_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .card-actions {
      display: flex;
      justify-content: center;
    }
    .btn {
      width: 100%;
    }
  }
`;

function RightPanel({ name }) {
  return (
    <RightContainer>
      <Card className="card last-shipped-card" sx={{ minWidth: 275 }}>
        <CardContent className="card-content">
          <div className="card-content_header">
            <h3>Last Shipped</h3>
            <Link href="#" underline="none">
              See all
            </Link>
          </div>
          <List
            items={lastShipped}
            resourceName="shippedItem"
            itemComponent={LastShippedListItem}
          />
        </CardContent>
        <CardActions className="card-actions">
          <Button className="btn" size="medium" variant="outlined">
            New Shipment
          </Button>
        </CardActions>
      </Card>
      <Card className="card top-sales-card" sx={{ minWidth: 275 }}>
        <CardContent className="card-content">
          <div className="card-content_header">
            <h3>Top Sales</h3>
            <Link href="#" underline="none">
              See all
            </Link>
          </div>
          <List
            items={topSales}
            resourceName="saleItem"
            itemComponent={TopSalesListItem}
          />
        </CardContent>
        <CardActions className="card-actions"></CardActions>
      </Card>
    </RightContainer>
  );
}

export default RightPanel;
